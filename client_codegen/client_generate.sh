curl -O https://raw.githubusercontent.com/Wojtur28/WorkoutTracker/main/src/main/resources/contract/contract.yml

java -jar openapi-generator-cli-7.0.1.jar generate   -i contract.yml  -c config.json -g typescript-fetch   -o ../tmp

cp -r ../tmp/* ../src/client

rm -r ../tmp