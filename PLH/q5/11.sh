#!/bin/bash

# Check if exactly 3 arguments are provided
if [ $# -ne 3 ]; then
    echo "Usage: $0 num1 num2 num3"
    exit 1
fi

# Assigning command line arguments to variables
num1=$1
num2=$2
num3=$3

# Finding the largest number
if [ $num1 -ge $num2 ] && [ $num1 -ge $num3 ]; then
    echo "The largest number is: $num1"
elif [ $num2 -ge $num1 ] && [ $num2 -ge $num3 ]; then
    echo "The largest number is: $num2"
else
    echo "The largest number is: $num3"
fi
