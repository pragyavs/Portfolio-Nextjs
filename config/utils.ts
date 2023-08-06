const getPageCountData = async () => {
    const data = await fetch('https://api.jsonbin.io/v3/b/64cf9d969d312622a38ccf59/latest', {
        method: "GET",
        headers: {
            "X-Master-Key": "$2b$10$Z4ahCaxvMRok4R2so.D7k.D7ajFxnMisZga228FOYpS1yV/1xJ982"
        }
    })

    const dataInJson = await data.json()
    return await dataInJson.record
}

const updatePageCountData = async (data: any) => {
    const response = await fetch('https://api.jsonbin.io/v3/b/64cf9d969d312622a38ccf59', {
        method: "PUT",
        headers: {
            "X-Master-Key": "$2b$10$Z4ahCaxvMRok4R2so.D7k.D7ajFxnMisZga228FOYpS1yV/1xJ982",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

const onResumeButtonClick = () => {
    async function fetchData() {
        const data = await getPageCountData();
        return data;
      }
  
      fetchData().then((res) => {
        const updatedRes = { ...res, resume: res.resume + 1 }
        updatePageCountData(updatedRes)
      })
}

export { getPageCountData, updatePageCountData, onResumeButtonClick }