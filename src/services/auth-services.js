import axios from 'axios';

const signInService = async (email, password) => {
    const response = await axios.post('/api/auth/login', {
        email,
        password,
    });

    try {
        if (response.status === 200) return response;
        else console.log('Failed to login: ', response.status);
    } catch (error) {
        console.log('Signin failed with', response.status);
    }
};

const signUpService = async (userInput) => {
    const { firstName, lastName, email, password } = userInput;
    
    try{
        const response = await axios.post('/api/auth/signup', {
            firstName,
            lastName,
            email,
            password,
        });
        if(response.status === 201)
            return response; 
    } catch(error) {
        console.log("Couldn't create user.", error);
    }
};

const signOutService = (tokenID) => {
    localStorage.removeItem(tokenID);
}

export { signInService, signUpService, signOutService };
