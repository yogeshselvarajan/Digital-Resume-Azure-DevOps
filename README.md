# Azure Cloud Resume Project

This project is a demonstration of building a resume integrated into GitHub and hosted on Microsoft Azure using various Azure services like Blob Storage, Azure Functions, and Cosmos DB. It showcases the development of a webpage with HTML and CSS, setting up a CI/CD workflow with GitHub Actions, and deploying a static web app with a serverless database.

## Features

- Resume webpage built with HTML and CSS.
- Integration with GitHub for version control and collaboration.
- Hosting the static webpage on Azure Blob Storage.
- Utilizing Azure Functions for serverless functionality.
- Data storage and retrieval using Azure Cosmos DB.
- Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions.

## Prerequisites

Before getting started, ensure that you have the following:

- Microsoft Azure subscription.
- GitHub account.
- Basic knowledge of HTML, CSS, and JavaScript.
- Familiarity with GitHub Actions and Azure services (Blob Storage, Azure Functions, and Cosmos DB).

## Architecture Overview

The Azure Cloud Resume Project consists of the following components and technologies:

- Front-end: The resume webpage is built using HTML and CSS. It provides an interactive and visually appealing representation of your resume.
- Serverless Azure Functions: Azure Functions will be used to implement serverless functionality, specifically for updating the total page counts dynamically. The JavaScript code for the total page counts function will be written and deployed as an Azure Function.
- Azure Cosmos DB: Cosmos DB will be used as the serverless database for storing and retrieving the total page counts data. The Azure Function will interact with Cosmos DB to update and retrieve the counts.
- Azure Blob Storage: The HTML, CSS, and JavaScript files will be hosted in Azure Blob Storage. This static hosting option allows you to serve your web content directly without the need for a web server.
- Microsoft CDN: To optimize the delivery of your web content and improve performance, you can use Microsoft Content Delivery Network (CDN) to cache and distribute your static web files globally.
- Continuous Integration and Continuous Deployment (CI/CD): GitHub Actions will be utilized to automate the CI/CD workflow for the repository. Whenever changes are pushed to the repository, GitHub Actions will trigger the necessary build and deployment steps to update the resume webpage.
