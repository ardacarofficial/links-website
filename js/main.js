/* Menu Active Codes */

$(document).ready(function(){
  
  $("#header_nav_menu_item_1").click(function(){
      $("#header_nav_menu_item_1").css("color", "var(--menu_active_text_color)");
      $("#header_nav_menu_item_2").css("color", "var(--menu_text_color)");
      $("#header_nav_menu_item_3").css("color", "var(--menu_text_color)");
      $("#main_section_container_1").css("display", "flex");
      $("#main_section_container_2").css("display", "none");
      $("#main_section_container_3").css("display", "none");
  });

  $("#header_nav_menu_item_2").click(function(){
    $("#header_nav_menu_item_1").css("color", "var(--menu_text_color)");
    $("#header_nav_menu_item_2").css("color", "var(--menu_active_text_color)");
    $("#header_nav_menu_item_3").css("color", "var(--menu_text_color)");
    $("#main_section_container_1").css("display", "none");
    $("#main_section_container_2").css("display", "flex");
    $("#main_section_container_3").css("display", "none");
  });

  $("#header_nav_menu_item_3").click(function(){
    $("#header_nav_menu_item_1").css("color", "var(--menu_text_color)");
    $("#header_nav_menu_item_2").css("color", "var(--menu_text_color)");
    $("#header_nav_menu_item_3").css("color", "var(--menu_active_text_color)");
    $("#main_section_container_1").css("display", "none");
    $("#main_section_container_2").css("display", "none");
    $("#main_section_container_3").css("display", "flex");
  });
  
});