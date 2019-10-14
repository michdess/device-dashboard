# Device Dashboard
The device dashboard show the results of an API call to a device list and their device readings. It is built using Laravel and Vue. 

Opening the app will load the device list. Clicking on a device will open the detail view.

## Installation
To install first git clone the repo
```
git clone repo
```
Copy the `.env.example` to `.env` and then add your database credentials.
```
cp .env.example .env
```
Run composer install
```
composer install
```
Generate the application key
```
php artisan key:generate
```
Install npm packages and dependencies (you could use yarn too)
```
npm install
```
Build the assets
```
npm run dev
```
Migrate your database
```
php artisan migrate
```
The site is good to go!
