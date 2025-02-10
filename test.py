import feedparser

# RSSフィードのURLを指定
feed_url = 'https://zenn.dev/feed'

# フィードを解析
feed = feedparser.parse(feed_url)

# 各エントリー（記事）に対して、タイトルとリンクを出力
for entry in feed.entries:
    print(f"タイトル: {entry.title}")
    print(f"リンク: {entry.link}\n")
    print(f"公開日時: {entry.published if 'published' in entry else '不明'}\n")
