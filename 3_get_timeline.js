const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const instanceUri = 'https://mustardon.tokyo'

// ファイルから情報を読み込む
const token = fs.readFileSync(path.join(__dirname, 'token.json'))

// マストドンのAPIクライアントを作成
const M = new Mastodon({
  access_token: token,
  timeout_ms: 60 * 1000, 
  api_url: instanceUri + '/api/v1/'
})

// タイムラインを読む --- (※1)
M.get('timelines/public', {})
 .then(res => {
   const data = res.data
   console.log(data)
 })