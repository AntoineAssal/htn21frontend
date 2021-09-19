export const getUserInfo = async () => {
    try {
        const apiRes = await fetch(`${BACKEND_URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        return await apiRes.json(); i
    } catch (error) {
        throw error;
    }
}

export const getUserById = async (id) => {
    try {
        const apiRes = await fetch(`${BACKEND_URL}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        return await apiRes.json();
    } catch (error) {
        throw error;
    }
}