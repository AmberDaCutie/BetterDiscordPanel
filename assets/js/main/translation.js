/**
 * @file translation.js
 * @author Sanjay Sunil (a.k.a D3VSJ)
 * @license GPL-3.0
 */

// BetterDiscordPanel

$("#my-profile").html(localeFile.headings.myprofile);
    $("#about").html(localeFile.text.about);
    $("#status").html(localeFile.status.loading);
    $("#profile").attr('title', localeFile.navbar.profile);