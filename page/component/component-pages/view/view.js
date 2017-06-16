

  Page({
  onReady: function () {
    this.animation = wx.createAnimation()

  },
  rotate: function () {
    this.animation.rotate(45).step()
    console.log('fuc invoke !')
    this.setData({ animation: this.animation.export() })
  },
    skew: function () {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  translate: function () {
    this.animation.translate(500, 200).rotate(45).step()
    this.setData({ animation: this.animation.export() })
  },
   reset: function () {
    this.animation.rotate(0, 0)
                  .scale(1)
                  .translate(0, 0)
                  .skew(0, 0)
                  .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  },
  like : function(){
      this.animation.translate(500, 200).rotate(45).step( {duration: 2000})
      
    this.setData({ animation: this.animation.export() })
            
   
  }
  ,dislike : function(){
      this.animation.translate(-500, 200).rotate(-45).step()
      
    this.setData({ animation: this.animation.export() })
    reset()
  }
  ,
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }
})




