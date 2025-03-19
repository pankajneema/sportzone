import os
import requests

# Dictionary of cricket-playing nations and T20 league teams with their country codes
CRICKET_TEAMS = {
    "India": "IN", "Australia": "AU", "England": "GB", "Pakistan": "PK", "New Zealand": "NZ",
    "South Africa": "ZA", "Sri Lanka": "LK", "West Indies": "JM", "Bangladesh": "BD", "Afghanistan": "AF",
    "Ireland": "IE", "Zimbabwe": "ZW", "Netherlands": "NL", "Scotland": "GB", "Namibia": "NA",
    "UAE": "AE", "Nepal": "NP", "USA": "US", "Oman": "OM", "Canada": "CA",
    
    # IPL Teams (Using India flag since they represent Indian cities)
    "Chennai Super Kings": "IN", "Mumbai Indians": "IN", "Royal Challengers Bangalore": "IN",
    "Kolkata Knight Riders": "IN", "Sunrisers Hyderabad": "IN", "Delhi Capitals": "IN",
    "Punjab Kings": "IN", "Rajasthan Royals": "IN", "Lucknow Super Giants": "IN",
    "Gujarat Titans": "IN",

    # Other T20 leagues (Using respective country flags)
    "Sydney Sixers": "AU", "Perth Scorchers": "AU", "Melbourne Stars": "AU",  # BBL (Australia)
    "Trinbago Knight Riders": "TT", "Guyana Amazon Warriors": "GY",  # CPL (West Indies)
    "Lahore Qalandars": "PK", "Karachi Kings": "PK", "Peshawar Zalmi": "PK",  # PSL (Pakistan)
    "Johannesburg Super Kings": "ZA", "Pretoria Capitals": "ZA",  # SA20 (South Africa)
    "Dubai Capitals": "AE", "Gulf Giants": "AE",  # ILT20 (UAE)
    "Los Angeles Knight Riders": "US", "MI New York": "US",  # MLC (USA)
}

def download_flag(team_name, country_code, save_folder):
    """Downloads the flag for a cricket team or country."""
    url = f"https://flagcdn.com/w320/{country_code.lower()}.png"
    response = requests.get(url, stream=True)

    if response.status_code == 200:
        os.makedirs(save_folder, exist_ok=True)
        file_name = f"{team_name.title().replace(' ', '_')}.png"  # Capitalize words and replace spaces
        file_path = os.path.join(save_folder, file_name)

        with open(file_path, "wb") as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)

        print(f"Flag for {team_name} saved at: {file_path}")
    else:
        print(f"Failed to download flag for {team_name}")

if __name__ == "__main__":
    save_folder = input("Enter the folder to save flags: ").strip()
    
    for team, code in CRICKET_TEAMS.items():
        download_flag(team, code, "/pnkj/sportscorer/public/images/teams/")


    print("All cricket team flags downloaded successfully!")
