from aiohttp import web
from recources.hadlers import websocket_news_handler, getnews_handler


if __name__ == '__main__':
    app = web.Application()
    app['sockets'] = []
    app.add_routes(
        [
            web.get('/ws', websocket_news_handler),
            web.get('/getnews', getnews_handler)
        ]
    )
    web.run_app(app)
    