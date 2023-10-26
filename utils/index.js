export async function fetchExercises() {
    const headers = {
        'X-RapidAPI-Key': 'e8e61d9638mshf2c592bf697514fp18b971jsn02e0d86ad08e',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

    const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
