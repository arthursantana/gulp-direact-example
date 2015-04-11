var Clock = React.createClass({
   getInitialState: function () {
      return {time: new Date()}
   },
   componentDidMount: function () {
      var self = this;
      this.timer = setInterval(function () {
         self.setState({time: new Date()});
      }, 1);
   },
   componentWillUnmount: function () {
      clearInterval(this.Timer);
   },
   render: function (e) {
      var t = this.state.time;
      var s = {
         color: this.props.color
      };
      return (
         <div style={s}>{t.getFullYear()}-{t.getMonth()}-{t.getDay()} {t.getHours()}:{t.getMinutes()}:{t.getSeconds()}</div>
      )
   }
});
