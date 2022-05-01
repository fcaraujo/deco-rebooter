# Minimal image instead of FROM mcr.microsoft.com/playwright
FROM ubuntu:focal

# Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

COPY . /e2e

WORKDIR /e2e

RUN npm install

RUN npx playwright install --with-deps chromium

CMD [ "npx", "playwright", "test", "--reporter=list", "&& echo completed" ]