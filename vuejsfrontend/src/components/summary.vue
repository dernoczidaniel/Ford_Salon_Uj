<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Model</th>
            <th>Szín</th>
            <th>Belsőszín</th>
            <th>Extrák</th>
            <th>Motor</th>
            <th>Üzemanyag</th>
            <th>Tag</th>
            <th>Ár</th>
            <th>Rendelés azonosító</th>
            <th class="text-center">PDF Számla</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ model }}</td>
            <td>{{ color }}</td>
            <td>{{ interiorcolor }}</td>
            <td>{{ extras }}</td>
            <td>{{ motor }}</td>
            <td>{{ fuel }}</td>
            <td>{{ tag }}</td>
            <td>{{ Price }} Ft</td>

            <td>{{ orderID }}</td>
            <td class="text-center">
              <button class="btn btn-primary " @click="downloadPDF">
                letöltése
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="10">
              <div class="d-flex justify-content-end">
                <button class="btn btn-danger mx-2" @click="cancelOrder">
                  Mégsem
                </button>
                <button class="btn btn-success mx-2" @click="order">
                  Rendelés
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table {
  font-size: 14px;
}

th,
td {
  vertical-align: middle !important;
}

th {
  font-weight: bold;
  text-align: center;
}

td {
  text-align: left;
}

.btn {
  font-size: 14px;
  padding: 10px 16px;
}
</style>
<script>
import { mapGetters } from 'vuex';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  // ...
  computed: {
    ...mapGetters(['color', 'interiorcolor', 'Price', 'model', 'extras'])
  },
  data() {
    return {
      index: 1,
      ellenorzes: false,
      orderID: ''

    }
  },
  mounted() {
    this.generateOrderID();
  },
  methods: {
    cancelOrder() {
      const confirmed = window.confirm('Biztos benne, hogy mégsem szeretné megrendelni a járművet?');
      if (confirmed) {
        this.$router.push('/cars');
      }
    }, generateOrderID() {
      let randomNumber = Math.floor(1000000 + Math.random() * 9000000);
      this.orderID = randomNumber.toString().substring(0, 7);
    },
  
  order() {

    const orderData = {
      model: this.model,
      color: this.color,
      interiorcolor: this.interiorcolor,
      extras: this.extras,
      price: this.Price,

    };
    axios.post('/api/order', orderData)
      .then(response => {
        // handle successful response
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.error(error);
        this.ellenorzes = true;

      });
  },
  downloadPDF() {
    const doc = new jsPDF();
    const tableRows = [];

    const tableColumns = ["Model", "Szín", "Belsöszin", "Extrák", "Motor", "Üzemanyag", "Tag", "Ár", "Rendelés azonosító"];
    const data = [[this.model, this.color, this.interiorcolor, this.extras, "teszt", "teszt", "teszt", this.Price +" Ft", this.orderID]];


    doc.autoTable({
      head: [tableColumns],
      body: data,
    });

    doc.save("Számla.pdf");
  }
}
}

</script>