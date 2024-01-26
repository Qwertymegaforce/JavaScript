import json
from aiohttp import web
from .utils import database, headers


def getnews_handler(request):
    return web.Response(body=json.dumps(database, ensure_ascii=False), status=200, headers=headers)

async def websocket_news_handler(request):
    ws = web.WebSocketResponse()
    request.app['sockets'].append(ws)
    await ws.prepare(request)
    for connection in request.app['sockets']:
        if connection.closed:
            request.app['sockets'].remove(connection)
    async for msg in ws:
        if msg.data == 'check':
            await ws.send_str('Вы подключены к серверу')
        else:
            database.append(json.loads(msg.data))
            for connection in request.app['sockets']:
                await connection.send_str(json.dumps(database, ensure_ascii=False))

    request.app['sockets'].remove(ws)
    return ws