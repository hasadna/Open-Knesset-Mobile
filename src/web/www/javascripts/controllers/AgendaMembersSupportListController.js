Ext.regController('AgendaMembersSupportList', {

	Index: function(options) {
    	
        if ( ! this.AgendaMembersSupportListView)
        {
            this.AgendaMembersSupportListView = this.render({
                xtype: 'AgendaMembersSupportListView',
            });
            
            /*
             this.AgendaMembersSupportListView.addListener('itemtap',
            	function(that, index, item, e) {
				var	record = that.store.getAt(index);
			   console.log(record);
			    OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/'+ record.data.id, options.historyUrl);
				});
				*/
        }

        var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});

        findData = OKnesset.AgendaListStore.getAt(findData);
       

  		
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.supportmembers + findData.data.name);
        this.application.viewport.setActiveItem(this.AgendaMembersSupportListView, options.animation);
    
 
 
     //this.AgendaMembersSupportListView.query('#MAgendaMembersSupportList')[0].refresh();
 
    },
    
	//refresh : function() {
    //    this.AgendaVoteList = this.AgendaVoteListView.query('#AgendaVoteList')[0];		
	//	this.AgendaVoteList.refresh();
	// }
 });