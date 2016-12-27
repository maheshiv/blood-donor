export default function() {
  this.transition(
    this.fromRoute('recepients'),
    this.toRoute('donors'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}
