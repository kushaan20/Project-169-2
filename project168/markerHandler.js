AFRAME.AFRAME.registerComponent('marker-handler', {
    schema: {
        
    },

    init: async function () {
      this.el.addEventListener("markerFound",() => {
        this.markerFound()
      })

      this.el.addEventListener("markerLost",() => {
        this.markerLost()
      })
    },

    markerFound: function() {
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex"
        var orderButton = document.getElementById("order-button");
        orderButton.addEventListener("click", () => {
            swal({
                title: "Order Toy",
                text: "Work in Progress!",
                icon: "Warning",
                button: "Cancel",
              });
        })

        var summaryButton = document.getElementById("summary-button");
        summaryButton.addEventListener("click", () => {
            swal({
                title: "Toys Ordered so Far",
                text: "Work in Progress!",
                icon: "Warning",
                button: "Cancel",
              });
        })
    },

     markerLost: function() {
       var buttondiv = document.getElementById("button-div");
       buttondiv.style.display = "none"
    },
});
