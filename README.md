## foreman-multi-proxy-test
Foreman Multi Proxy Test

```bash
➜  foreman-multi-proxy-test git:(master) npm start

> foreman-multi-proxy-test@1.0.0 start /Users/nazar/Hub/node_projects/foreman-multi-proxy-test
> ./node_modules/foreman/nf.js start -x 4000,3000 app=2,api=3

[WARN] No ENV file found
[OKAY] Starting Proxy Server [app] 4000 -> (5000-5001)
[OKAY] Starting Proxy Server [api] 3000 -> (5100-5102)
00:53:47 api.1   |  API listening on port 5100
00:53:47 app.2   |  APP listening on port 5001
00:53:47 api.3   |  API listening on port 5102
00:53:47 api.2   |  API listening on port 5101
00:53:47 app.1   |  APP listening on port 5000
```
