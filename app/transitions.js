export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('application.index'),
      this.toRoute('application_loading'),
      this.use('fade'),
      this.reverse('fade')
    );
}
