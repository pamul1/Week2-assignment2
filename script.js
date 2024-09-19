let data = []

function songValidation(){

    event.preventDefault()
    let songName=inputSongName.value
    let bandArtistName=inputBrandArtistName.value
    let songDuration=parseInt(inputSongDuration.value)

    let validationSongName = false
    let validationBandArtistName = false
    let validationDuration = false

    if (songName.length === 0){
        console.log("enter name of song")
        
    } else {
        validationSongName = true
    }

    if (brandArtistName.length === 0 ){
        console.log("enter name of band artist")
    } else {
        validationBandArtis = true
        
    }


    if ( duration < 300 ) {
        validationDuration= true
    }else{
        console.log("Duration must be less then 300 seconds")
    }

    if (validationSongName === true && validationBandArtistName === true && validationDuration === true){
        let tmp={
            songName,
            bandArtistName,
            songDuration
        };

        data.push(tmp);
        let tableLayout=`<tr>
        <th>Song Name</th>
        <th>BandArtist Name</th>
        <th>Song Duration</th>
        </tr>`;

        for (let i=0; i<data.length; i++){
            tableLayout+=`<tr>
            <td>${data[i].song}</td>
            <td>${data[i].bandartist}</td>
            <td>${data[i].duration}</td>
            </tr>`;
        }
    }

    songTable.innerHTML = tableLayout
}