# Population Data Visualization Project

This project consists of a Django API designed to provide population data categorized by age intervals for both male and female demographics. Alongside the API, there is a React frontend that utilizes Redux for state management to fetch and display the population data. The frontend incorporates React ApexCharts to visualize the population distribution between males and females across different age intervals from the years 1950 to 2021.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)


## Prerequisites
Before setting up the project, ensure you have the following prerequisites installed:
1. Python: Ensure you have Python installed on your system. You can download and install Python from the [official Python website](https://www.python.org/downloads/).
2. Node.js and npm: Install Node.js and npm (Node Package Manager) to manage frontend dependencies. You can download and install Node.js from the [official Node.js website](https://nodejs.org/en).
3. Git: Install Git for version control. You can download and install Git from the [official Git website](https://git-scm.com/).

## Setup

1. Clone the repository
2. Navigate to the `project` directory:
	```sh
	cd project
	```
3. Create a Python virtual environment:
	```sh
	python3 -m venv .venv
	```
4. Activate the virtual environment:
	```sh
	.\.venv\Scripts\activate
	```
	> **Note:** if you are on a mac, use the following command:
	```sh
	source .venv/bin/activate
	```
5. Install Python dependencies:
	```sh
	pip install -r requirements.txt
	```
6. Finally start the Django development server:
	```sh
	python manage.py runserver
	```
