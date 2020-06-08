API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}?over=true" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
