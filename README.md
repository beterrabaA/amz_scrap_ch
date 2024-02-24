# Scrapper Challenge
This is a simple scrapper that gets the title, description and image of a amazon website.It has backend and frontend. The backend is made with node and the frontend is made with simple (HTML,Javacript,CSS).

## Backend
The backend is made with node and it uses the following libraries:
- express
- cheerio
- axios

## Frontend
The frontend is made with simple HTML, Javascript and CSS. It uses the following libraries:
- Ajax (Jquery)
- Bootstrap

## How to run
Can be runned in two ways:
### Using bash commands

```bash
bash ./run.sh
```

### Manually
To run the backend you need to have node installed. Then you can run the following commands:
```bash
cd backend
npm install
npm start
```
To run the frontend you just need to open the index.html file in your browser.
```bash
cd frontend
npm install
npm start
```
## How to use
To use the scrapper you just need to put the name of the amazon product in the input and click the search button. The result will be shown in the screen.

## API Documentation
The backend has a simple API that can be used to get the product information. The API has only one endpoint:

```http
  GET /api/scrapper?keyword=product_name
```
| Params   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `keyword` | `string` | Search params  |

The response will be a JSON with the following structure:
```json
[
  {
    "title": "Product Title",
    "price": "Product Price",
    "rating": "Product rate",
    "reviews": "Product reviews",
    "image": "Product Image URL"
  },
  {
    "title": "Product Title",
    "price": "Product Price",
    "rating": "Product rate",
    "reviews": "Product reviews",
    "image": "Product Image URL"
  }
]
```