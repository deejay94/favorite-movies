


curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
--header "Content-type: application/json" \
--data '{
  "book": {
    "title": "'"${NEWTITLE}"'",
    "author": "'"${NEWAUTHOR}"'"
  }
}'

echo
