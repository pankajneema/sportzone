import requests

# Fetch live matches using Cricbuzz API (unofficial)
url = "https://www.cricbuzz.com/api/criscore/live_matches"
response = requests.get(url)
print(response.text)
data = response.json()
print(data)
for match in data["matches"]:
    print(f"{match['team1']} vs {match['team2']}: {match['score']}")
