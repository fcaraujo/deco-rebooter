FROM mcr.microsoft.com/playwright

COPY . /e2e

WORKDIR /e2e

RUN npm install

RUN npx playwright install

CMD [ "npx", "playwright", "test", "--reporter=list" ]