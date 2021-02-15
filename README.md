# Video generator

> Used for generate videos (from static image) with a given duration

### Requirements

- node
- yarn or npm
- ffmpeg

### Setup

```
git clone https://github.com/mleralec/video-generator.git
cd video-generator
yarn install
yarn build
yarn prod
```

### Available scripts

- start: run the project in development
- watch: run **start** script with watcher
- build: build the project on **dist** folder
- prod: run the project inside the **dist** folder
- test: run tests
- lint: lint the project
- clean: delete all videos inside public/videos
