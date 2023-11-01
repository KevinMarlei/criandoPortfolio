
(async () =>{
    try {
        const profileData = await fetchProfileData();
        console.log(profileData);
    } catch (error) {
        console.error(error);
    }
})();