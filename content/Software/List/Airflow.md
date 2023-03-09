---
id: ucd9xh61ex86tkstrnj0viw
title: Airflow
desc: ''
updated: 1647540281203
created: 1646927850716
---


## What is this thing

* [Apache Airflow Explainers and how different components of Airflow work | Qubole](https://www.qubole.com/tech-blog/apache-airflow-tutorial-dags-tasks-operators-sensors-hooks-xcom/)

## Skills

* Run an example job where you log something
* Run same example job where you log something, this time on a schedule, say every one to ten minutes
* Run a SQL Database, say postgres, connect to it and perform a SQL query on it
* Connect to Redshift Database, using Postgres connector, and perform a SQL query on it
* Get a S3 bucket with data, JSON or CSV, and use Postgres connector to get that S3 data into redshift
* Perform transformations on data in redshift to calculate statistics
* Use time as a delimiter fed into the task via args setting airflow to backlog stuff performing a task for each month

## Install

* [bitnami/airflow - Docker Image | Docker Hub](https://hub.docker.com/r/bitnami/airflow/) 
* [An Effective Airflow Setup](http://www.the-efficient-programmer.com/programming/an-effective-airflow-setup.html)
* Templates
  * [soggycactus/airflow-repo-template: The easiest way to run Airflow locally, with linting & tests for valid DAGs and Plugins.](https://github.com/soggycactus/airflow-repo-template)
* [wiki.software.list.docker.docker-compose.templates](docker-compose%20templates)
  **Needs version 1.27.0**
  * [/2.0.1/docker-compose.yaml not working · Issue #14855 · apache/airflow](https://github.com/apache/airflow/issues/14855)
  * [docker-compose.yaml](https://airflow.apache.org/docs/apache-airflow/stable/docker-compose.yaml)

**Udacity**

* https://raw.githubusercontent.com/apache/airflow/constraints-1.10.3/constraints-3.6.txt

* Need Python 3.6
  * [wiki.software.List.pyenv](pyenv.md)
* Need a python virtual environment
  * [wiki.software.Programming Language.python.Virtual Environments](Python%20Virtual%20Environments)

``` bash

AIRFLOW_VERSION=1.10.3
PYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"
pip install "apache-airflow[async,aws_hook,postgres,google]==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
pip install awscli==1.16.17
pip install aws-xray-sdk==0.95

rm airflow.cfg airflow.db unittests.cfg
export AIRFLOW__CORE__AIRFLOW_HOME=$(pwd)
export AIRFLOW_HOME="${AIRFLOW__CORE__AIRFLOW_HOME}"
export AIRFLOW__CORE__DAGS_FOLDER="${AIRFLOW__CORE__AIRFLOW_HOME}/dags"
export AIRFLOW__CORE__LOAD_EXAMPLES="False"
airflow initdb
airflow webserver
airflow scheduler
airflow worker

rm -rf airflow.cfg airflow.db unittests.cfg logs
airflow initdb
airflow webserver

airflow scheduler

airflow list_dags
airflow list_dag_runs hello_world
```

## Tutorials

* [Airflow DAG: Coding your first DAG for Beginners - YouTube](https://www.youtube.com/watch?v=IH1-0hwFZRQ)

`/home/$USER/.local/lib/python3.8/site-packages/airflow/example_dags/`

## Examples

* [Hello World DAG](https://gist.github.com/chandulal/d4562c6c9282c2b5a8e1ab338c2c0c49)
  * Copy this into your dags folder for testing purposes
* [Your First DAG in 5 minutes](https://www.notion.so/Your-First-DAG-in-5-minutes-5d15bb2c51b044ea9b8266b2ac07c1fe)
  * Train 3 Fake Models
* [blue-yonder/airflow-plugin-demo: Example for an airflow plugin](https://github.com/blue-yonder/airflow-plugin-demo)
  * Operator examples

## Operator stuff

* [LocalExecutor - Unable to make custom plugin works · Issue #443 · puckel/docker-airflow](https://github.com/puckel/docker-airflow/issues/443)

## Code Samples

``` python
# Setup
from airflow import DAG
from datetime import datetime
with DAG("youtube",
  start_date=datetime(2021, 1 ,1), 
  schedule_interval='@daily', 
  catchup=False) as dag:

# Operators
from airflow import DAG
from airflow.operators.python_operator import PythonOperator

def hello_date(*args, **kwargs):
    print(f"Hello {kwargs[‘execution_date’]}")

def hello_date(*args, **kwargs):
    print(f“Hello {kwargs[‘execution_date’]}”)
    divvy_dag = DAG(...)
    task = PythonOperator(
        task_id=’hello_date’,
        python_callable=hello_date,
        provide_context=True,
        dag=divvy_dag)
```

## S3 Stuff

AdministratorAccess
AmazonRedshiftFullAccess
AmazonS3FullAccess

## Example Projects

* [culpgrant/Spotify_ETL: ETL Project with the Spotify API. Automating extracting data from the Spotify API, transforming it, and loading it into a Postgres SQL database using Python. Scheduling of script using Apache Airflow. Additionally, automating weekly summary statistics sent to my email.](https://github.com/culpgrant/Spotify_ETL)