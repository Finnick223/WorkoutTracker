java -jar openapi-generator-cli-7.0.1.jar generate   -i /Users/wojtur/IdeaProjects/WorkoutTracker/src/main/resources/contract/contract.yml  -c config.json -g typescript-axios   -o ../tmp

cp -r ../tmp/* ../src/client

rm -r ../tmp

