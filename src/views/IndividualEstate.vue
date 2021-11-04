<template>
    <main class="individual-estate-container">
        <img id="estateImage" src="../assets/mainImage3.jpg" alt="Estate thumbnail">
        <div style="margin-left: 2.5vw;">
            <p id="estateAddress">Estate address</p>
            <h1 id="estateName">Estate name</h1>
            <strong><p id="estatePrice">Price</p></strong>
            <div class="pills-container">
                <p id="actionType" class="pill">Action type</p>
                <p id="estateType" class="pill">Estate type</p>
                <p id="squareMeters" class="pill">Square meters</p>
                <p id="nRooms" class="pill">Number of rooms</p>
                <p id="nBaths" class="pill">Number of baths</p>
            </div>
        </div>
        <form id="appointmentForm">
            <fieldset id="appointmentFieldset">
                <legend class="reusable-text"><strong>Want an appointment?</strong> Choose a date and hour:</legend>
                <input type="date" id="appointmentDate" name="input1">
                <input type="time" id="appointmentTime" name="input2">
                <button class="small-button">Confirm</button>
            </fieldset>
        </form>
    </main>
    <footer>   
    </footer>
</template>