#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
    pid_t p;
    
    printf("MUNNA BHAIYA PIET CSE\n");
    printf("Before fork\n");
    
    p = fork();  
    
    if (p == 0) {  
        printf("I am the Child process, having ID: %d\n", getpid());
        printf("My Parent's ID is: %d\n", getppid());
    } else {  
        printf("My Child's ID is: %d\n", p);
        printf("I am the Parent process, having ID: %d\n", getpid());
    }
    
    printf("Common statement\n");  
    
    return 0;
}
