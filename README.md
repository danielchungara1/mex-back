# Dev Environment

## Init mongodb service
docker-compose -f db-service.yml up

## Apply migrations
migrate-mongo up

## Run web server
npm run dev

## For add migrations
migrate-mongo create insert_mac_products