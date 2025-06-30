#!/bin/bash

echo "Enter Num1"
read num1
echo "Enter Num2"
read num2
echo "Enter Num3"
read num3

if [ "$num1" -ge "$num2" ] && [ "$num1" -ge "$num3" ]; then
    largest=$num1
elif [ "$num2" -ge "$num1" ] && [ "$num2" -ge "$num3" ]; then
    largest=$num2
else
    largest=$num3
fi

echo "The largest number is: $largest"
