export const requestValidNumber = async (phoneNumber: string) => {
    const URL = `http://apilayer.net/api/validate?access_key=0b20ce13fbc2618ea70e15299bfd5ce6&number=${phoneNumber}&country_code=RU&format=1`
    try {
        const response = await fetch(URL);

        if (response.status !== 200) {
            throw new Error('Server Error!');
        }
        return await response.json();

    } catch (error) {
        console.log(`Error: ${error}`);
        return {valid: false};
    }
}