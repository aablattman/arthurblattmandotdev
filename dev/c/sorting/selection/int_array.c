#include <stdio.h>

//
// Selection Sort O(n^2)
//
int main() {

	FILE *rnd_ints;
	char rnd_ints_filename[50] = "random_integers.txt";
	int int_arr[1000];

	int min_index, sort_buff;
	int i = 0;


	rnd_ints = fopen(rnd_ints_filename, "r");
	if (rnd_ints == NULL) {
		printf("Error opening file: %s", rnd_ints_filename);
		return 1;
	}

	while(fscanf(rnd_ints, "%d", &int_arr[i]) != EOF) {
		i++;

		if(i >= 1000) {
			break;
		}
	}

	fclose(rnd_ints);


	for(int j = 0; j < 1000-1; j++) {
		min_index = j;

		for(int k = j+1; k < 1000; k++) {
			if(int_arr[min_index] > int_arr[k]) {
				min_index = k;
			}
		}

		sort_buff = int_arr[j];
		int_arr[j] = int_arr[min_index];
		int_arr[min_index] = sort_buff;
	}

	printf("First 10 sorted\n");
	for(int l = 0; l < 10; l++) {
		printf("%d\n", int_arr[l]);
	}


	return 0;
}