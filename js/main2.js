
// for username
// http მოთხოვნა მიმართავს სერვისს რომელიც რანდომულად აგენერირებს მომხმარებელს 
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var results = data["results"][0];
        showUserInfo(results);
    }
});

// ამ ფუნქციას გადაეცემა არგუმენტად სერვისის მიერ დაბრუნებული ობიექტი
// ამავე ფუნქციაში ხდება გარკვეული ინფორმაციის ამოღება და html კომპონენტებზე განთავსება
function showUserInfo(results) {
    var avatar = results["picture"]["medium"];
    var name = results["name"]["first"] + " " + results["name"]["last"];

    $("#user-image").attr("src", avatar);
    $("#name").text(name);

}


