<template>
  <div class="container col-lg-12">
    <div class="row">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Model</th>
              <th>Szín</th>
              <th>Belsőszín</th>
              <th>Extrák</th>
              <th>Motor</th>
              <th>Üzemanyag</th>
              <th>Tag</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ model }}</td>
              <td>{{ color }}</td>
              <td>{{ interiorcolor }}</td>
              <td>{{ extras }}</td>
              <td> teszt</td>
              <td> teszt</td>
              <td> teszt</td>

            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="6">Ár:</td>
              <td>{{ Price }} Ft</td>
            </tr>
            <tr>
              <td colspan="7">
                <div class="right m-5">
                  <button class="btn btn-danger float-right m-2" @click="cancelOrder">Mégsem</button>
                  <button class="btn btn-success float-right m-2" @click="order">Rendelés</button>
                  <button class="btn btn-primary float-right m-2"  @click="downloadPDF">Számla letöltése PDF</button>

                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

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
    }
  },
  methods: {
    cancelOrder() {
      const confirmed = window.confirm('Biztos benne, hogy mégsem szeretné megrendelni a járművet?');
      if (confirmed) {
        this.$router.push('/cars');
      }
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
      
      const tableColumns = ["Model", "Szín", "Belsöszin", "Extrák", "Motor", "Üzemanyag", "Tag", "Ár"];
      const data = [[this.model, this.color, this.interiorcolor, this.extras, "teszt", "teszt", "teszt", this.Price]];


      doc.autoTable({
        head: [tableColumns],
        body: data,
      });

      doc.save("Számla.pdf");
    }
  }
}

</script>