const getItems = async () => {
    const res = await fetch('http://localhost:3005/api/items', {
        method: 'GET'
    });
    return res.json();
};



export default {
    getItems
}