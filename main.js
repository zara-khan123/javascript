name_array = [];
function submit()
{
    name_array.push(document.getElementById("member_1").value);
    name_array.push(document.getElementById("member_2").value);
    name_array.push(document.getElementById("member_3").value);
    name_array.push(document.getElementById("member_4").value);
     
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";

}
function sorting()
{
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}