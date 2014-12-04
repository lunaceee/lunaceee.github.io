function setupReadMore(li) {

	if(!li.hasClass('readMoreSetup'))

	{

		if(li.find('.readMore.notAllowed').length > 0)

		{

			li.find('img').css('opacity',0.4);

			li.hover(function() {

				jQuery(this).find('.realExcerpt').hide();

				jQuery(this).find('.not_allowed_content').show();

			}, function() {

				jQuery(this).find('.realExcerpt').show();

				jQuery(this).find('.not_allowed_content').hide();

			});

			li.addClass('readMoreSetup');

		}

	}

}

function repositionWeeklyArticles() {

	if(jQuery('#weeklyArticles').length > 0)

	{

		if(jQuery('#weeklyArticles li').length > 0)

		{

			if(jQuery('#weeklyArticles li:last').position().top < jQuery('#weeklyArticles').height())

			{

				jQuery('.more a[href=#weeklyArticles]').hide();

				jQuery('#weeklyArticles').height(/*jQuery('#weeklyArticles li:last').position().top + jQuery('#weeklyArticles li:last').height()*/'auto');

			}

			else

			{

				jQuery('#weeklyArticles').removeAttr('style');

				jQuery('.more a[href=#weeklyArticles]').show();

			}

		}

		else

		{

			jQuery('.more a[href=#weeklyArticles]').hide();

		}

	}

}

function loadWeeklyArticles(href, t) {
	jQuery('#weeklyArticles').empty();
	showLoading(jQuery('#weeklyArticles'));
	
	jQuery('#weeklyArticles').load(href + ' #weeklyArticles li',function() {
		hideLoading(jQuery('#weeklyArticles'));

		var filterText = '';
		jQuery('.showme.weekly a.selected').each(function() {
			if(jQuery(this).parent().index() != 0)
				filterText += jQuery(this).text() + ', ';
		});
		
		jQuery('.filterText.weekly').remove();
		if(filterText.length > 0) {
			jQuery('#weeklyArticles').before('<div class="filterText weekly">Filtering by : ' + filterText.substr(0,filterText.length-2) + ' - <a href="#" class="clearFilter">Clear Filter</a></div>');
			
			jQuery('.filterText.weekly a.clearFilter').click(function() {
				jQuery('.showme.weekly').find('a.selected').removeClass('selected');
				jQuery('.showme.weekly').each(function() { jQuery(this).find('li:first a').addClass('selected'); });
				loadWeeklyArticles('/stories/all/all');
				
				return false;
			});
		}

		if(jQuery('#weeklyArticles li').length == 0) {
			jQuery('#weeklyArticles').append('There are no stories matching your filter.');
			jQuery('.more a[href="#weeklyArticles"]').parent().hide();
		}
		else if(jQuery('#weeklyArticles li:last').position().top +100 < jQuery('#weeklyArticles').height())
			jQuery('.more a[href="#weeklyArticles"]').parent().hide();
		else
			jQuery('.more a[href="#weeklyArticles"]').parent().show();

		if(t != undefined)
		{
			if(t.parents('.showme').hasClass('issue'))
			{
				var mParts = t.attr('href').split('/');
				var oParts = jQuery('.showme.weekly:not(".issue") a:last').attr('href').split('/');
	
				jQuery('.showme.weekly:not(".issue") a').each(function() {
					var s = jQuery(this).attr('href').split('/');
					s[5] = mParts[5];
					jQuery(this).attr('href',s.join('/'));
				});
			}
			else
			{
				var mParts = t.attr('href').split('/');
				var oParts = jQuery('.showme.weekly.issue a:last').attr('href').split('/');
	
				jQuery('.showme.weekly.issue a').each(function() {
					var s = jQuery(this).attr('href').split('/');
					s[4] = mParts[4];
					jQuery(this).attr('href',s.join('/'));
				});
			}
		}
		
		jQuery('.weeklyImage').each(function() {
			var imgSrc = jQuery(this).find('a').attr('data-original');
			
			if(imgSrc)
				jQuery(this).find('img').attr('src',imgSrc);
		});

		setupArticleImagery('.weeklyImage');
		setupTextAlignment();
	});
}

function setupShowMore() {

	jQuery('.more a').click(function() {

		var elm = jQuery(jQuery(this).attr('href'));


		if(jQuery(this).hasClass('less'))

		{
			var toHide;

			var newH;

				toHide = jQuery(jQuery(this).attr('data-rel'));

			var oldH = elm.height();			

			if(toHide != undefined)

			{

				toHide.hide();

				elm.height('auto');

				newH = elm.height();

				elm.height(newH);

				if(elm.attr('id') == 'homeGallery') newH = newH+22;

				toHide.show();

			}

			var t = jQuery(this);		

			elm.height(oldH).animate({

				'height' : newH

			}, 500, null, function() {

				if(t.hasClass('shift'))

				{

					var offset = elm.offset().top;

					

					if(offset > jQuery('#mainNavContainer').offset().top)

						offset = offset - jQuery('#mainNavContainer').outerHeight();			

					jQuery('html,body').animate({

						'scrollTop'	:	offset

					}, 500);

				}	

			});	

			jQuery(this).removeClass('less').text(jQuery(this).attr('data-original-text'));

		}

		else

		{

			elm.height(elm.height());

			var oldStyle = elm.attr('style');

			elm.css('overflow','visible');

			elm.height('auto');

			var newH = elm.height();

			var maxH = newH;

			var t = jQuery(this);

			var showRows = elm.attr('data-showRows');

			if(showRows != undefined)

			{

				var currentRows = parseInt(elm.attr('data-openrows'));

				var c = wColCount;	

				if(elm.attr('id') == 'dailyArticles') c = dColCount; 

				showRows = parseInt(showRows);

				
				var nextHidden = c*(currentRows+showRows);
		

				if(elm.children().length > nextHidden)

					elm.attr('data-openRows',currentRows+showRows);

				else

					elm.attr('data-openRows',Math.ceil(elm.children().length/c));
		

				if(elm.attr('id') == 'weeklyArticles')

				{

					setupTextAlignment();

				}		

				if(elm.attr('id') == 'dailyArticles')

				{

					elm.children('li').each(function(i) {

						if(i < nextHidden)

							jQuery(this).find('img.lazyarticle').trigger('dailyload');

					});

				}	

				if(elm.children().length > nextHidden)

					newH = elm.children(':eq(' + nextHidden + ')').position().top - parseInt(elm.css('paddingTop').substr(0,elm.css('paddingTop').length-2));

			}

			if(oldStyle != undefined)

				elm.attr('style',oldStyle);

			elm.animate({

				'height' : newH

			}, 500, null, function() {

				if(t.hasClass('shift'))

				{	

					var offset = jQuery(t.attr('data-rel')).offset().top;

				

					if(offset > jQuery('#mainNavContainer').offset().top)

						offset = offset - jQuery('#mainNavContainer').outerHeight();
	

					jQuery('html,body').animate({

						'scrollTop'	:	offset+5

					}, 500);

				}

			});	

			if(jQuery(this).parent().hasClass('andLess'))

				jQuery(this).attr('data-original-text',jQuery(this).text()).addClass('less').text(jQuery(this).attr('data-less-text'));

			else if(newH == maxH)

				jQuery(this).hide();

		}	

		return false;

	});

}

function resizeArticleContainers() {

	if(jQuery('#weeklyArticles').length > 0)

	{

		jQuery('.container').removeAttr('style').width('auto');

		var newWeeklyWidth = cellW * wColCount;//Math.floor(jQuery('.container').width()/cellW)*cellW;

		jQuery('#weeklyArticles').width(newWeeklyWidth);

		

		newWeeklyWidth -= 15;

		

		jQuery('#weeklyArticles,#dailyArticles').width(newWeeklyWidth);

		

		jQuery('header .container').css('minWidth', newWeeklyWidth).width(newWeeklyWidth);

		jQuery('#weeklyArticles').parents('.container:first').css('minWidth', newWeeklyWidth).width(newWeeklyWidth);

		

		/*var newDailyWidth = Math.floor(jQuery('.container').width()/177)*177;

		jQuery('#dailyArticles').width(newDailyWidth);*/

	}

	else

	{

		jQuery('.container').removeAttr('style').width('auto');

		var newWeeklyWidth = Math.floor(jQuery('.container').width()/cellW)*cellW;

		

		newWeeklyWidth -= 15;

		

		jQuery('header .container, .container.resizable'/*, form.checkout'*/).css('minWidth', newWeeklyWidth).width(newWeeklyWidth);

	}

	

	if(jQuery('#otherArticles').length > 0)

	{
		var cols = Math.floor(jQuery('#otherArticles').width()/cellW) + 1;
		
		jQuery('#otherArticles li').each(function(i) {

			jQuery(this).removeClass('last');

			if(i % cols == 0)

				jQuery(this).prev().addClass('last');

		});

	}

}

