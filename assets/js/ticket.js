window.onload = function () {
    //remove link breadcrumb, header and save button
    document.querySelector(".wc-admin-breadcrumb").style.display = 'none';
    document.querySelector(".mp-header-logo").style.display = 'none';
    document.querySelector("p.submit").style.display = 'none';
    document.querySelectorAll("h2")[4].style.display = 'none';
  
    //update form_fields label
    var label = document.querySelectorAll("th.titledesc");
    for (var i = 0; i < label.length; i++) {
      label[i].id = "mp_field_text";
      if (label[i].children[0].children[0] != null) {
        label[i].children[0].children[0].style.position = 'relative';
        label[i].children[0].children[0].style.fontSize = '22px';
      }
    }
  
    //collpase ajustes avanzados
    var table = document.querySelectorAll(".form-table");
    for (i = 0; i < table.length; i++) {
      table[i].id = "mp_table_" + i;
    }
  
    // Remove title and description label necessary for custom
    document.querySelector(".hidden-field-mp-title").setAttribute("type", "hidden");
    document.querySelector(".hidden-field-mp-desc").setAttribute("type", "hidden");
    var removeLabel = document.querySelectorAll("#mp_table_0");
    removeLabel[0].children[0].children[0].style.display = 'none';
    removeLabel[0].children[0].children[1].style.display = 'none';
  
    //clone save button
    var cloneSaveButton = document.getElementById('woocommerce_woo-mercado-pago-ticket_checkout_btn_save');
    if (document.getElementById("mp_table_15") != undefined && document.getElementById("mp_table_16") == undefined) {
      document.getElementById("mp_table_15").append(cloneSaveButton.cloneNode(true));
    }
  
    if (document.getElementById("mp_table_16") != undefined) {
      document.getElementById("mp_table_16").append(cloneSaveButton.cloneNode(true));
      document.getElementById("mp_table_21").append(cloneSaveButton.cloneNode(true));
      document.getElementById("mp_table_22").append(cloneSaveButton.cloneNode(true));
      document.getElementById("mp_table_24").append(cloneSaveButton.cloneNode(true));
      document.getElementById("mp_table_26").append(cloneSaveButton.cloneNode(true));
  
  
      var collapse_title = document.querySelector("#woocommerce_woo-mercado-pago-ticket_checkout_advanced_settings");
      var collapse_table = document.querySelector("#mp_table_22");
      collapse_table.style.display = "none";
      collapse_title.style.cursor = "pointer";
  
      collapse_title.innerHTML += "<span class='btn-collapsible' id='header_plus' style='display:block'>+</span>\
              <span class='btn-collapsible' id='header_less' style='display:none'>-</span>";
  
      var header_plus = document.querySelector("#header_plus");
      var header_less = document.querySelector("#header_less");
  
      collapse_title.onclick = function () {
        if (collapse_table.style.display == "none") {
          collapse_table.style.display = "block";
          header_less.style.display = "block";
          header_plus.style.display = "none";
        }
        else {
          collapse_table.style.display = "none";
          header_less.style.display = "none";
          header_plus.style.display = "block";
        }
      }
  
      //collpase Configuración Avanzada
      var collapse_title_2 = document.querySelector("#woocommerce_woo-mercado-pago-ticket_checkout_ticket_payments_advanced_title");
      var collapse_table_2 = document.querySelector("#mp_table_26");
      var collapse_description_2 = document.querySelector("#woocommerce_woo-mercado-pago-ticket_checkout_payments_advanced_description");
      collapse_table_2.style.display = "none";
      collapse_description_2.style.display = "none";
      collapse_title_2.style.cursor = "pointer";
  
      collapse_title_2.innerHTML += "<span class='btn-collapsible' id='header_plus_2' style='display:block'>+</span>\
              <span class='btn-collapsible' id='header_less_2' style='display:none'>-</span>";
  
      var header_plus_2 = document.querySelector("#header_plus_2");
      var header_less_2 = document.querySelector("#header_less_2");
  
      collapse_title_2.onclick = function () {
        if (collapse_table_2.style.display == "none") {
          collapse_table_2.style.display = "block";
          collapse_description_2.style.display = "block";
          header_less_2.style.display = "block";
          header_plus_2.style.display = "none";
        }
        else {
          collapse_table_2.style.display = "none";
          collapse_description_2.style.display = "none";
          header_less_2.style.display = "none";
          header_plus_2.style.display = "block";
        }
      }
  
      //payment methods
      var input_payments = document.querySelectorAll('#mp_table_24 td.forminp label');
      for (i = 0; i < input_payments.length; i++) {
        input_payments[i].id = "input_payments_mt";
      }
  
      //offline payments configuration form
      var offlineChecked = "";
      var countOfflineChecked = 0;
      var offlineInputs = document.querySelectorAll(".ticket_payment_method_select");
      for (var ioff = 0; ioff < offlineInputs.length; ioff++) {
        var offline_payment_translate = offlineInputs[ioff].getAttribute("data-translate");
        if (offlineInputs[ioff].checked == true) {
          countOfflineChecked += 1;
        }
      }
  
      if (countOfflineChecked == offlineInputs.length) {
        offlineChecked = "checked";
      }
  
      for (ioff = 0; ioff < offlineInputs.length; ioff++) {
        if (ioff == 0) {
          var checkbox_offline_prepend = "<div class='all_checkbox'>\
          <label for='checkmeoff' id='input_payments' style='margin-bottom: 37px !important;'>\
            <input type='checkbox' name='checkmeoff' id='checkmeoff' "+ offlineChecked + " onclick='completeOfflineCheckbox()'>\
            "+ offline_payment_translate + "\
          </label>\
        </div>";
          offlineInputs[ioff].parentElement.insertAdjacentHTML('beforebegin', checkbox_offline_prepend);
          break;
        }
      }
  
    }
  }
  
  //Offline payments
  function completeOfflineCheckbox() {
    var offlineCheck = document.getElementById("checkmeoff").checked;
    var offlineInputs = document.querySelectorAll(".ticket_payment_method_select");
    for (var i = 0; i < offlineInputs.length; i++) {
      if (offlineCheck == true) {
        offlineInputs[i].checked = true;
      }
      else {
        offlineInputs[i].checked = false;
      }
    }
  }