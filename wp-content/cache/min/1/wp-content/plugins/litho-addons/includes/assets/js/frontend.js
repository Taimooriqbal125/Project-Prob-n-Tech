(function($) {
    "use strict";
    var tabletBreakPoint = 1024;
    if (typeof elementorFrontendConfig.breakpoints != "undefined") {
        if (typeof elementorFrontendConfig.breakpoints.lg != "undefined") {
            tabletBreakPoint = elementorFrontendConfig.breakpoints.lg - 1
        }
    }
    var simpleDropdown = 0,
        linkDropdown = 0;
    var isMobile = !1,
        isiPhoneiPad = !1;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = !0
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = !0
    }
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    function isIE() {
        var ua = window.navigator.userAgent,
            msie = ua.indexOf('MSIE ');
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            return !0
        } else {
            return !1
        }
        return !1
    }

    function getWindowWidth() {
        return $(window).width()
    }

    function getWindowHeight() {
        return $(window).height()
    }

    function getTopSpaceHeaderHeight() {
        var mini_header_height = 0,
            main_header_height = 0,
            wpadminbarHeight = 0,
            ts_height = 0;
        if ($('.admin-bar #wpadminbar').length > 0) {
            wpadminbarHeight = $('.admin-bar #wpadminbar').outerHeight();
            wpadminbarHeight = Math.round(wpadminbarHeight);
            ts_height = ts_height + wpadminbarHeight
        }
        if ($('.mini-header-main-wrapper').length > 0) {
            var mini_header_object = $('.mini-header-main-wrapper');
            mini_header_height = mini_header_object.outerHeight();
            ts_height = ts_height + mini_header_height
        }
        if ($('.header-common-wrapper.standard').length > 0) {
            var main_header_object = $('.header-common-wrapper.standard');
            main_header_height = main_header_object.outerHeight();
            ts_height = ts_height + main_header_height
        }
        return ts_height
    }

    function fullScreenSlideHeight() {
        if ($('.full-screen-slide').length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0) {
            var wpadminbarHeight = 0,
                headerHeight = 0,
                tsFullTitleHeight = 0;
            headerHeight = getTopSpaceHeaderHeight();
            if ($('.admin-bar #wpadminbar').length > 0) {
                wpadminbarHeight = $('.admin-bar #wpadminbar').outerHeight();
                wpadminbarHeight = Math.round(wpadminbarHeight)
            }
            if ($('.litho-main-title-wrappper').length > 0) {
                tsFullTitleHeight = $('.litho-main-title-wrappper').outerHeight()
            }
            $('.full-screen-slide').each(function() {
                var _self = $(this);
                _self.parents('.elementor-top-section').imagesLoaded(function() {
                    var minheight = getWindowHeight();
                    if (_self.parents('.elementor-top-section').hasClass('top-space')) {
                        minheight = minheight - tsFullTitleHeight;
                        _self.css('height', (minheight - headerHeight))
                    } else {
                        if (getWindowWidth() <= tabletBreakPoint) {
                            var fulltotalHeight = headerHeight + tsFullTitleHeight;
                            _self.css('height', minheight - fulltotalHeight)
                        } else {
                            _self.css('height', (minheight - wpadminbarHeight))
                        }
                    }
                })
            })
        }
    }
    var LithoAddonsInit = {
        init: function init() {
            var widgets = {
                'litho-accordion.default': LithoAddonsInit.AccordionInit,
                'litho-archive-posts.default': LithoAddonsInit.blogListInit,
                'litho-blog-list.default': LithoAddonsInit.blogListInit,
                'litho-blog-post-slider.default': LithoAddonsInit.blogPostSliderInit,
                'litho-brand-logo-carousel.default': LithoAddonsInit.brandLogoCarouselInit,
                'litho-content-slider.default': LithoAddonsInit.contentSliderInit,
                'litho-countdown.default': LithoAddonsInit.countDownTimerInit,
                'litho-fancy-text-box.default': LithoAddonsInit.fancyTextBoxInit,
                'litho-feature-box-carousel.default': LithoAddonsInit.featureboxCarouselInit,
                'litho-icon-box.default': LithoAddonsInit.IconBoxInit,
                'litho-icon-box-carousel.default': LithoAddonsInit.brandLogoCarouselInit,
                'litho-image-carousel.default': LithoAddonsInit.imageCarouselInit,
                'litho-image-gallery.default': LithoAddonsInit.imageGalleryInit,
                'litho-image-offset-shadow.default': LithoAddonsInit.imageOffsetShadowInit,
                'litho-interactive-portfolio.default': LithoAddonsInit.interactivePortfolioInit,
                'litho-instagram.default': LithoAddonsInit.brandLogoCarouselInit,
                'litho-left-menu.default': LithoAddonsInit.leftMenuInit,
                'litho-liquid-image.default': LithoAddonsInit.liquidImageInit,
                'litho-mega-menu.default': LithoAddonsInit.megaMenuInit,
                'litho-package-carousel.default': LithoAddonsInit.packageCarouselInit,
                'litho-page-title.default': LithoAddonsInit.pageTitleInit,
                'litho-pie-chart.default': LithoAddonsInit.pieChartInit,
                'litho-portfolio.default': LithoAddonsInit.portfolioInit,
                'litho-archive-portfolio.default': LithoAddonsInit.portfolioInit,
                'litho-portfolio-filter.default': LithoAddonsInit.portfolioFilterInit,
                'litho-portfolio-slider.default': LithoAddonsInit.portfolioSliderInit,
                'litho-progress.default': LithoAddonsInit.progressBarInit,
                'litho-popup.default': LithoAddonsInit.popupInit,
                'litho-search-form.default': LithoAddonsInit.searchFormInit,
                'litho-slider.default': LithoAddonsInit.sliderInit,
                'litho-split-portfolio-slider.default': LithoAddonsInit.splitPortfolioSliderInit,
                'litho-team-memeber-carousel.default': LithoAddonsInit.teamMemeberCarouselInit,
                'litho-testimonial-carousel.default': LithoAddonsInit.testimonialCarouselInit,
                'litho-text-rotator.default': LithoAddonsInit.textRotatorInit,
                'litho-tilt-box.default': LithoAddonsInit.tiltBoxInit,
                'litho-vertical-counter.default': LithoAddonsInit.verticalCounterInit,
                'litho-video-button.default': LithoAddonsInit.videoButtonInit,
            };
            elementorFrontend.hooks.addAction('frontend/element_ready/global', LithoAddonsInit.globalInit);
            elementorFrontend.hooks.addAction('frontend/element_ready/section', LithoAddonsInit.elementorSection);
            elementorFrontend.hooks.addAction('frontend/element_ready/column', LithoAddonsInit.elementorColumn);
            if ($('header nav.appear-down-scroll').length > 0) {
                elementorFrontend.hooks.addFilter('frontend/handlers/menu_anchor/scroll_top_distance', function(scrollPosition) {
                    if ($('.header-common-wrapper').length > 0) {
                        scrollPosition -= $('.header-common-wrapper').outerHeight() - 50
                    }
                    $('.navbar-collapse.collapse').collapse('hide');
                    return scrollPosition
                })
            }
            $.each(widgets, function(widget, callback) {
                elementorFrontend.hooks.addAction('frontend/element_ready/' + widget, callback)
            })
        },
        globalInit: function() {
            if ($('.fit-videos').length > 0 && $.inArray('fitvids', LithoMain.disable_scripts) < 0) {
                $('.fit-videos').fitVids()
            }
            if ($('.grid-filter').length > 0) {
                $('.grid-filter').each(function(index) {
                    index += 1;
                    $(this).attr('id', 'litho-portfolio-' + index);
                    $(this).attr('data-id', 'litho-portfolio-' + index);
                    $(this).find('li > a').attr('data-id', 'litho-portfolio-' + index)
                })
            }
            if ($('.blog-grid-filter').length > 0) {
                $('.blog-grid-filter').each(function(index) {
                    index += 1;
                    $(this).attr('id', 'litho-blog-' + index);
                    $(this).attr('data-id', 'litho-blog-' + index);
                    $(this).find('li > a').attr('data-id', 'litho-blog-' + index)
                })
            }
            if ($('.portfolio-grid-with-filter').length > 0) {
                $('.portfolio-grid-with-filter').each(function(index) {
                    index += 1;
                    $(this).attr('class', function(i, c) {
                        return c.replace(/(^|\s)litho-portfolio-\S+/g, '')
                    });
                    $(this).addClass('litho-portfolio-' + index);
                    $(this).attr('data-uniqueid', 'litho-portfolio-' + index)
                })
            }
            if ($('.portfolio-grid-without-filter').length > 0) {
                $('.portfolio-grid-without-filter').each(function(index) {
                    index += 1;
                    $(this).attr('class', function(i, c) {
                        return c.replace(/(^|\s)litho-portfolio-\S+/g, '')
                    });
                    $(this).addClass('litho-portfolio-layout-' + index);
                    $(this).attr('data-uniqueid', 'litho-portfolio-layout-' + index)
                })
            }
            LithoAddonsInit.setParallax()
        },
        elementorSection: function($scope) {
            var sectionId = $scope.data('id'),
                editMode = Boolean(elementorFrontend.isEditMode());
            if (editMode) {
                var parallaxSettings = LithoAddonsInit.sectionSettings(sectionId);
                get_parallax(parallaxSettings);
                var scrollTodownSettings = LithoAddonsInit.sectionSettings(sectionId);
                get_scroll_to_down(scrollTodownSettings);
                var equalHeightSettings = LithoAddonsInit.sectionSettings(sectionId);
                get_equal_height(equalHeightSettings)
            } else {
                var parallaxSettings = $scope.data('parallax-section-settings');
                get_parallax(parallaxSettings);
                var scrollTodownSettings = $scope.data('scroll-to-down-settings');
                get_scroll_to_down(scrollTodownSettings);
                var equalHeightSettings = $scope.data('litho-equal-height-settings');
                get_equal_height(equalHeightSettings)
            }

            function get_parallax(settings) {
                if ('undefined' !== typeof settings) {
                    if ('parallax' === settings.parallax) {
                        $scope.addClass('parallax');
                        $scope.attr('data-parallax-background-ratio', settings.parallax_ratio)
                    } else {
                        $scope.removeClass('parallax');
                        $scope.removeAttr('data-parallax-background-ratio')
                    }
                } else {
                    return
                }
            }

            function get_scroll_to_down(settings) {
                if ('undefined' !== typeof settings) {
                    var enable_text_separator = '';
                    var content = null;
                    var scroll_to_down = ('undefined' !== typeof settings.scroll_to_down) ? settings.scroll_to_down : '',
                        scroll_style_types = ('undefined' !== typeof settings.scroll_style_types) ? settings.scroll_style_types : '',
                        scroll_target_id = ('undefined' !== typeof settings.scroll_target_id) ? settings.scroll_target_id : '',
                        scroll_text_separator = ('undefined' !== typeof settings.scroll_text_separator) ? settings.scroll_text_separator : '',
                        scroll_text = ('undefined' !== typeof settings.scroll_text) ? settings.scroll_text : '',
                        scroll_custom_image = ('undefined' !== typeof settings.scroll_custom_image) ? settings.scroll_custom_image : '',
                        scroll_icon = ('undefined' !== typeof settings.scroll_icon) ? settings.scroll_icon : '',
                        wrapper = wp.template('element-section');
                    if ('yes' !== scroll_to_down) {
                        return
                    }
                    if (('scroll-down-type-2' !== scroll_style_types && '' == scroll_icon) || ('scroll-down-type-2' == scroll_style_types && '' == scroll_text)) {
                        return
                    }
                    if ('yes' === scroll_text_separator) {
                        enable_text_separator = ' after-text'
                    }
                    if ('undefined' !== typeof scroll_target_id) {
                        scroll_target_id = scroll_target_id.replace(/^#/, '')
                    }
                    content = wrapper({
                        scroll_style_types: scroll_style_types,
                        scroll_target_id: scroll_target_id,
                        scroll_text: scroll_text,
                        enable_text_separator: enable_text_separator,
                        scroll_custom_image: scroll_custom_image,
                        scroll_icon: scroll_icon,
                    });
                    var element = $('section[data-id="' + sectionId + '"]').find('.elementor-container').first();
                    if ('undefined' == typeof element || '' == element) {
                        return
                    }
                    $(content).insertBefore(element)
                } else {
                    return
                }
            }

            function get_equal_height(settings) {
                if ('undefined' !== typeof settings) {
                    if ('yes' === settings.litho_equal_height_enable) {
                        var litho_equal_height_arr = {};
                        litho_equal_height_arr.litho_equal_height_enable = settings.litho_equal_height_enable;
                        litho_equal_height_arr.litho_disable_on_tablet = settings.litho_disable_on_tablet;
                        litho_equal_height_arr.litho_disable_on_mobile = settings.litho_disable_on_mobile;
                        $scope.addClass('litho-equal-height');
                        $scope.attr('data-litho-equal-height-settings', JSON.stringify(litho_equal_height_arr))
                    } else {
                        $scope.removeClass('litho-equal-height');
                        $scope.removeAttr('data-litho-equal-height-settings')
                    }
                } else {
                    return
                }
            }

            function initEqualHeight() {
                if ('undefined' !== typeof $scope.attr('data-litho-equal-height-settings')) {
                    $('.litho-equal-height').each(function() {
                        var _self = $(this);
                        var mobileWidth = elementorFrontendConfig.breakpoints.md;
                        var tabletWidth = elementorFrontendConfig.breakpoints.lg;
                        var equal_height_settings = $.parseJSON(_self.attr('data-litho-equal-height-settings'));
                        _self.find('.elementor-widget-container').matchHeight({
                            byRow: !1
                        });
                        if ('yes' === equal_height_settings.litho_disable_on_mobile && getWindowWidth() < mobileWidth) {
                            _self.find('.elementor-widget-container').matchHeight({
                                remove: !0
                            })
                        } else if ('yes' === equal_height_settings.litho_disable_on_tablet && getWindowWidth() >= mobileWidth && getWindowWidth() < tabletWidth) {
                            _self.find('.elementor-widget-container').matchHeight({
                                remove: !0
                            })
                        }
                    })
                }
            }
            if ($.inArray('jquery-match-height', LithoMain.disable_scripts) < 0) {
                initEqualHeight();
                $(window).on('resize orientationchange', function() {
                    initEqualHeight()
                })
            }
            LithoAddonsInit.liquidImageInit($scope);
            if ($scope.parents('header').hasClass('site-header')) {
                var $target = $('.hamburger-menu-wrapper.hamburger-menu-half .elementor-section-wrap > .elementor-section > div');
                if ($target.length > 0 && $.inArray('mCustomScrollbar', LithoMain.disable_scripts) < 0) {
                    $target.mCustomScrollbar({
                        "theme": "dark"
                    })
                }
            }
        },
        sectionSettings: function(sectionId) {
            var sectionData = {};
            if (!window.elementor.hasOwnProperty('elements')) {
                return !1
            }
            var editorElements = window.elementor.elements;
            if (!editorElements.models) {
                return !1
            }
            $.each(editorElements.models, function(index, obj) {
                if (sectionId == obj.id) {
                    sectionData = obj.attributes.settings.attributes
                }
            });
            var litho_scroll_to_down, litho_scroll_to_down_style_types, litho_target_id, litho_scroll_text_separator_after, litho_scroll_to_down_text, litho_custom_image, litho_image, litho_selected_icon, litho_parallax_ratio, litho_parallax, litho_equal_height_enable, litho_disable_on_tablet, litho_disable_on_mobile = '';
            if ('undefined' != typeof sectionData.litho_scroll_to_down) {
                litho_scroll_to_down = sectionData.litho_scroll_to_down
            }
            if ('undefined' != typeof sectionData.litho_scroll_to_down_style_types) {
                litho_scroll_to_down_style_types = sectionData.litho_scroll_to_down_style_types
            }
            if ('undefined' != typeof sectionData.litho_target_id) {
                litho_target_id = sectionData.litho_target_id
            }
            if ('undefined' != typeof sectionData.litho_scroll_text_separator_after) {
                litho_scroll_text_separator_after = sectionData.litho_scroll_text_separator_after
            }
            if ('undefined' != typeof sectionData.litho_scroll_to_down_text) {
                litho_scroll_to_down_text = sectionData.litho_scroll_to_down_text
            }
            if ('undefined' != typeof sectionData.litho_custom_image) {
                litho_custom_image = sectionData.litho_custom_image
            }
            if ('undefined' != typeof sectionData.litho_image && '' !== sectionData.litho_image.url) {
                litho_image = '<img src="';
                litho_image += sectionData.litho_image.url;
                litho_image += '" alt="" />'
            }
            if ('undefined' != typeof sectionData.litho_selected_icon && '' !== sectionData.litho_selected_icon.value) {
                litho_selected_icon = '<i class="';
                litho_selected_icon += sectionData.litho_selected_icon.value;
                litho_selected_icon += '" aria-hidden="true"></i>'
            }
            if ('yes' === litho_custom_image && '' !== litho_image) {
                litho_selected_icon = litho_image
            }
            if ('undefined' != typeof sectionData.litho_parallax) {
                litho_parallax = sectionData.litho_parallax
            }
            if ('undefined' != typeof sectionData.litho_parallax_ratio) {
                litho_parallax_ratio = sectionData.litho_parallax_ratio.size
            }
            if ('undefined' != typeof sectionData.litho_equal_height_enable) {
                litho_equal_height_enable = sectionData.litho_equal_height_enable
            }
            return {
                'scroll_to_down': litho_scroll_to_down,
                'scroll_style_types': litho_scroll_to_down_style_types,
                'scroll_target_id': litho_target_id,
                'scroll_text_separator': litho_scroll_text_separator_after,
                'scroll_text': litho_scroll_to_down_text,
                'scroll_custom_image': litho_custom_image,
                'scroll_icon': litho_selected_icon,
                'parallax_ratio': litho_parallax_ratio,
                'parallax': litho_parallax,
                'litho_equal_height_enable': litho_equal_height_enable,
                'litho_disable_on_tablet': litho_disable_on_tablet,
                'litho_disable_on_mobile': litho_disable_on_mobile,
            }
        },
        elementorColumn: function($scope) {
            var columnId = $scope.data('id'),
                editMode = Boolean(elementorFrontend.isEditMode());
            if (editMode && !$scope.parents().hasClass('hamburger-menu-wrapper')) {
                var settings = LithoAddonsInit.columnSettings(columnId);
                if ('undefined' !== typeof settings && 'yes' === settings.fullscreen) {
                    $scope.addClass('full-screen');
                    var $minheight = $(window).height();
                    $($scope).css('min-height', $minheight)
                } else {
                    $scope.removeClass('full-screen');
                    $($scope).css('min-height', '')
                }
            } else {
                var settings = $scope.data('fullscreen-column-settings');
                if ('undefined' !== typeof settings && 'yes' === settings.fullscreen) {
                    $scope.addClass('full-screen');
                    var $minheight = $(window).height();
                    $($scope).css('min-height', $minheight)
                } else {
                    $scope.removeClass('full-screen');
                    $($scope).css('min-height', '')
                }
            }
        },
        columnSettings: function(columnId) {
            var columnData = {};
            if (!window.elementor.hasOwnProperty('elements')) {
                return !1
            }
            var editorElements = window.elementor.elements;
            if (!editorElements.models) {
                return !1
            }
            $.each(editorElements.models, function(index, obj) {
                $.each(obj.attributes.elements.models, function(index, obj) {
                    if (columnId == obj.id) {
                        columnData = obj.attributes.settings.attributes
                    }
                })
            });
            return {
                'fullscreen': columnData.fullscreen,
            }
        },
        AccordionInit: function($scope) {
            $scope.addClass('elementor-widget-accordion')
        },
        blogListInit: function($scope) {
            var arr_uniqueid = [],
                arr_dataid = [],
                hidedefault = !0,
                selector = '*',
                $blog_list_grid = $('.blog-grid', $scope).first(),
                $blog_side_image = $('.blog-side-image', $scope).first(),
                $grid_selectors = $scope.find('.blog-grid-filter > li > a'),
                uniqueId = $blog_list_grid.data('uniqueid'),
                $blog_settings = $blog_list_grid.data('blog-settings') || {},
                $blog_post_gallery_grid = $blog_list_grid.find('.blog-post-gallery-grid'),
                $post_format_slider = $blog_list_grid.find('.post-format-slider'),
                $fit_videos_count = $blog_list_grid.find('.fit-videos'),
                blog_pagination_type = $blog_settings.pagination_type;
            if ($blog_list_grid.length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0) {
                $blog_list_grid.imagesLoaded(function() {
                    $blog_list_grid.isotope({
                        layoutMode: 'masonry',
                        itemSelector: '.grid-item',
                        percentPosition: !0,
                        stagger: 0,
                        masonry: {
                            columnWidth: '.grid-sizer'
                        }
                    });
                    $blog_list_grid.isotope();
                    setTimeout(function() {
                        $blog_list_grid.isotope()
                    }, 500);
                    blog_list_animation($blog_list_grid)
                })
            } else {
                blog_list_animation($blog_list_grid)
            }
            $('.blog-grid-filter > li.active > a').each(function(index) {
                var selector = $(this).data('filter'),
                    _this_id = $(this).data('id'),
                    _grand_parent = $(this).parent().parent();
                if ('*' != selector) {
                    hidedefault = !1
                } else {
                    hidedefault = !0
                }
                default_selector(hidedefault)
            });
            $grid_selectors.on('click.blog-grid-filter', function() {
                var selector = $(this).data('filter'),
                    _parent = $(this).parent(),
                    _grand_parent = $(this).parent().parent(),
                    _this_id = $(this).data('id');
                if ('' != _this_id) {
                    $(selector).parent().find('.litho-animated').removeAttr('data-animation data-animation-delay').removeClass('litho-animated animated fadeIn elementor-invisible');
                    $grid_selectors = $('#' + _this_id + ' > li > a');
                    $grid_selectors.parent().removeClass('active');
                    _parent.addClass('active');
                    if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                        $('.' + _this_id).isotope({
                            filter: selector
                        })
                    }
                    LithoAddonsInit.AnimationonFilterOnClick()
                } else {
                    $(selector).parent().find('.litho-animated').removeAttr('data-animation data-animation-delay').removeClass('litho-animated animated fadeIn elementor-invisible');
                    $grid_selectors.parent().removeClass('active');
                    _parent.addClass('active');
                    if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                        $blog_list_grid.isotope({
                            filter: selector
                        })
                    }
                    $('.litho-elementor-visible').each(function() {
                        var _self = $(this);
                        if (!_self.hasClass('animated')) {
                            _self.removeClass('litho-elementor-visible').addClass('elementor-invisible')
                        }
                    })
                }
                return !1
            });
            if ($blog_side_image.length > 0) {
                blog_list_animation($blog_side_image)
            }

            function default_selector(hidedefault) {
                if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                    $('.blog-grid-filter').each(function() {
                        if ($('#' + $(this).attr('data-id') + ' > li.active > a').attr('data-id') != '') {
                            var blog_filter = $('.' + $(this).find('li.active a').attr('data-id')),
                                data_id = $('#' + $(this).find('li.active a').attr('data-id')).find('li.active a').attr('data-filter'),
                                blog_selector = data_id;
                            blog_filter.isotope({
                                layoutMode: 'masonry',
                                itemSelector: '.grid-item',
                                percentPosition: !0,
                                masonry: {
                                    columnWidth: '.grid-sizer'
                                },
                                filter: blog_selector
                            });
                            blog_list_animation(blog_filter)
                        }
                    })
                }
            }

            function blog_list_animation($target) {
                var $element = $target.find('.litho-animated');
                if ($element.length > 0) {
                    elementorFrontend.waypoint($element, function() {
                        var _this = $(this),
                            dataAnimation = _this.attr('data-animation') || '',
                            dataAnimationDelay = _this.attr('data-animation-delay') || 0;
                        if ('' === dataAnimation || 'none' === dataAnimation) {
                            _this.removeClass('elementor-invisible');
                            return
                        }
                        setTimeout(function() {
                            _this.removeClass('elementor-invisible').addClass('animated ' + dataAnimation)
                        }, dataAnimationDelay)
                    })
                }
            }
            if ($blog_post_gallery_grid.length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0) {
                $blog_post_gallery_grid.each(function() {
                    $blog_post_gallery_grid.imagesLoaded(function() {
                        $blog_post_gallery_grid.isotope({
                            layoutMode: 'masonry',
                            itemSelector: '.grid-gallery-item',
                            percentPosition: !0,
                            masonry: {
                                columnWidth: '.grid-gallery-sizer'
                            }
                        });
                        $blog_post_gallery_grid.isotope()
                    });
                    setTimeout(function() {
                        $blog_post_gallery_grid.isotope()
                    }, 500)
                })
            }
            if ($post_format_slider.length > 0 && $.inArray('swiper', LithoMain.disable_scripts) < 0) {
                $post_format_slider.each(function() {
                    var $post_format_slider = new Swiper($(this), {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        keyboard: {
                            enabled: !0,
                            onlyInViewport: !0
                        },
                        loop: !0,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: !0,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                })
            }
            if ($fit_videos_count.length > 0 && $.inArray('fitvids', LithoMain.disable_scripts) < 0) {
                $('.fit-videos').fitVids()
            }
            if ($('.blog-infinite-scroll-pagination a').length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0 && $.inArray('infinite-scroll', LithoMain.disable_scripts) < 0) {
                if ('load-more-pagination' === blog_pagination_type) {
                    var $bloginfinite = $('.blog-grid').infiniteScroll({
                        path: '.blog-infinite-scroll-pagination a',
                        history: !1,
                        navSelector: '.blog-infinite-scroll-pagination',
                        contentSelector: '.blog-infinite-scroll-pagination',
                        append: '.blog-grid .grid-item',
                        status: '.page-load-status',
                        scrollThreshold: !1,
                        loadOnScroll: !1,
                        button: '.view-more-button'
                    })
                } else {
                    var $bloginfinite = $('.blog-grid').infiniteScroll({
                        path: '.blog-infinite-scroll-pagination a',
                        history: !1,
                        navSelector: '.blog-infinite-scroll-pagination',
                        contentSelector: '.blog-infinite-scroll-pagination',
                        append: '.blog-grid .grid-item',
                        status: '.page-load-status',
                        scrollThreshold: 100,
                        loadOnScroll: !0,
                    })
                }
                $bloginfinite.on('append.infiniteScroll', function(event, response, path, items) {
                    var $newblogpost = $(items);
                    $newblogpost.imagesLoaded(function() {
                        $('.blog-grid').isotope('appended', $newblogpost);
                        $('.blog-grid').isotope('layout');
                        LithoAddonsInit.defaultentranceAnimation($scope);
                        LithoAddonsInit.defaultLightboxGallery();
                        if ($('.fit-videos').length > 0 && $.inArray('fitvids', LithoMain.disable_scripts) < 0) {
                            $('.fit-videos').fitVids()
                        }
                    })
                });
                $bloginfinite.on('last.infiniteScroll', function(event, response, path) {
                    $('.page-load-status').hide();
                    setTimeout(function() {
                        $('.page-load-status').show()
                    }, 500);
                    setTimeout(function() {
                        $('.page-load-status').hide()
                    }, 2500)
                })
            }
            $(document).on('click', '.sl-button', function() {
                var button = $(this),
                    post_id = button.attr('data-post-id'),
                    security = button.attr('data-nonce'),
                    iscomment = button.attr('data-iscomment');
                var allbuttons;
                if ('1' === iscomment) {
                    allbuttons = $('.sl-comment-button-' + post_id)
                } else {
                    allbuttons = $('.sl-button-' + post_id)
                }
                var loader = allbuttons.next('#sl-loader');
                if ('' !== post_id) {
                    $.ajax({
                        type: 'POST',
                        url: LithoFrontend.ajaxurl,
                        data: {
                            action: 'process_simple_like',
                            post_id: post_id,
                            nonce: security,
                            is_comment: iscomment
                        },
                        success: function(response) {
                            var icon = response.icon,
                                count = response.count;
                            allbuttons.html(icon + count);
                            if ('unliked' === response.status) {
                                var like_text = LithoFrontend.i18n.likeText;
                                allbuttons.prop('title', like_text);
                                allbuttons.removeClass('liked')
                            } else {
                                var unlike_text = LithoFrontend.i18n.unlikeText;
                                allbuttons.prop('title', unlike_text);
                                allbuttons.addClass('liked')
                            }
                            loader.empty()
                        }
                    })
                }
                return !1
            })
        },
        blogPostSliderInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        brandLogoCarouselInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        contentSliderInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        countDownTimerInit: function($scope) {
            var $target = $('.elementor-countdown-wrapper', $scope).first(),
                content = null,
                settings = $target.data('settings') || {},
                enddate = $target.data('enddate'),
                wrapper = wp.template('count-down');
            content = wrapper({
                day_show: settings.day_show,
                dayDigit: '%-D',
                dayLabel: settings.day_label + '%!d',
                hours_show: settings.hours_show,
                hoursDigit: '%H',
                hoursLabel: settings.hours_label,
                minutes_show: settings.minutes_show,
                minutesDigit: '%M',
                minutesLabel: settings.minutes_label,
                seconds_show: settings.seconds_show,
                secondsDigit: '%S',
                secondsLabel: settings.seconds_label
            });
            if ($($target).length > 0 && $.inArray('jquery-countdown', LithoMain.disable_scripts) < 0) {
                $($target).countdown(enddate).on('update.countdown', function(event) {
                    var $this = $(this).html(event.strftime('' + content))
                })
            }
        },
        fancyTextBoxInit: function($scope) {
            LithoAddonsInit.defaultentranceAnimation($scope)
        },
        featureboxCarouselInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope, '.elementor-feature-box-carousel-wrapper')
        },
        IconBoxInit: function($scope) {
            $scope.addClass('elementor-widget-icon-box')
        },
        imageCarouselInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        imageGalleryInit: function($scope) {
            var $target = $scope.find('.portfolio-grid');
            if ($target.length > 0) {
                LithoAddonsInit.defaultIsotope($target);
                var $element = $target.find('.litho-animated');
                elementorFrontend.waypoint($element, function() {
                    var _this = $(this),
                        dataAnimation = _this.attr('data-animation') || '',
                        dataAnimationDelay = _this.attr('data-animation-delay') || 0;
                    if ('' === dataAnimation || 'none' === dataAnimation) {
                        _this.removeClass('elementor-invisible');
                        return
                    }
                    setTimeout(function() {
                        _this.removeClass('elementor-invisible').addClass('animated ' + dataAnimation)
                    }, dataAnimationDelay)
                })
            }
        },
        imageOffsetShadowInit: function($scope) {
            var $target = $scope.find('.image-back-offset-shadow');
            if ($target.length > 0 && $.inArray('jquery-appear', LithoMain.disable_scripts) < 0) {
                $target.appear();
                if ($target.is(':appeared')) {
                    $('.image-back-offset-shadow').addClass('active')
                } else {
                    $(document).on('appear', '.image-back-offset-shadow', function(e) {
                        $('.image-back-offset-shadow').addClass('active')
                    })
                }
                $target.appear().trigger('resize')
            }
        },
        interactivePortfolioInit: function($scope) {
            if ($('.hover-list-item').length > 0) {
                var interactiveEventName = isiPhoneiPad ? 'click' : 'mouseover';
                $(document).on(interactiveEventName, '.hover-list-item a', function(e) {
                    if (!$(this).parent().hasClass('active')) {
                        $('.hover-list-item').removeClass('active');
                        $(this).parent().addClass('active');
                        return !1
                    }
                })
            }
        },
        instagramInit: function($scope) {
            var instafeed_elem = $scope.find('.litho-instagram-feed').eq(0),
                settings = instafeed_elem.data('settings'),
                show_likes = settings.likes,
                show_comments = settings.comments,
                widget_id = settings.target,
                wrapper = wp.template('instagram-feed');
            if ('' == settings.user_id || 'undefined' == typeof settings.user_id) {
                return
            }
            var feed = new Instafeed({
                get: 'user',
                userId: settings.user_id,
                sortBy: settings.sort_by,
                accessToken: settings.access_token,
                limit: settings.no_items_to_show,
                target: widget_id,
                resolution: settings.resolution,
                orientation: 'portrait',
                template: function() {
                    content = wrapper({
                        show_likes: show_likes,
                        show_comments: show_comments,
                        link: '{{link}}',
                        image: '{{image}}',
                        likes: '{{likes}}',
                        comments: '{{comments}}',
                    });
                    return content
                }(),
            });
            feed.run()
        },
        leftMenuInit: function($scope) {
            var $target = $('.header-common-wrapper:not(.left-menu-classic) .litho-left-menu-wrap');
            var scrollbarTheme = $target.attr('data-scrollbar-theme');
            if ($target.length > 0 && $.inArray('mCustomScrollbar', LithoMain.disable_scripts) < 0) {
                $target.mCustomScrollbar({
                    "theme": scrollbarTheme
                })
            }
            $(document).on('click', '.navbar-toggler', function() {
                if (($('.elementor-widget-litho-left-menu-toggle').length > 0) && getWindowWidth() <= tabletBreakPoint) {
                    $('body').toggleClass('left-classic-mobile-menu');
                    $('body').toggleClass('navbar-collapse-show')
                }
                $('.sub-menu-item').collapse('hide');
                $('.menu-list-item.open').removeClass('show')
            })
        },
        liquidImageInit: function($scope) {
            var $target = $scope.find('.liquid-image-wrapper');
            if ($target.length > 0) {
                LithoAddonsInit.setParallax()
            }
        },
        megaMenuInit: function($scope) {
            $(window).on('resize', function() {
                megaMenuOnResize();
                mobileClassicNavigation();
                navbarDropdown()
            });
            megaMenuOnResize();

            function megaMenuOnResize() {
                $('nav.header-common-wrapper li.dropdown.megamenu').on('touchstart mouseenter click', function(e) {
                    var windowWidth = getWindowWidth();
                    if (windowWidth >= tabletBreakPoint) {
                        var dropdownMenuObj = $(this).children('.dropdown-menu');
                        dropdownMenuObj.css({
                            'left': ''
                        });
                        var menuSpacing = 30,
                            linkPosition = ($(this).position()).left,
                            linkWidth = $(this).outerWidth(),
                            wrapperPosition = ($(this).parents('.navbar-collapse').offset()).left,
                            dropdownWidth = dropdownMenuObj.outerWidth();
                        var actualLeftPosition = ((linkPosition + (linkWidth / 2)) - (dropdownWidth / 2));
                        var afterReducewrapperPosition = (windowWidth - wrapperPosition);
                        if ((actualLeftPosition + wrapperPosition) < 0) {
                            actualLeftPosition = -(wrapperPosition) + menuSpacing
                        } else if ((actualLeftPosition + dropdownWidth) > afterReducewrapperPosition) {
                            actualLeftPosition = (afterReducewrapperPosition - dropdownWidth) - menuSpacing
                        }
                        dropdownMenuObj.css({
                            'left': actualLeftPosition + 'px'
                        })
                    } else {
                        $(this).children('.dropdown-menu').css({
                            right: '',
                            left: ''
                        })
                    }
                })
            }

            function menuPosition(element) {
                var windowWidth = getWindowWidth();
                if (element.hasClass('simple-dropdown')) {
                    simpleDropdown = element;
                    linkDropdown = element.find('a.nav-link');
                    var menuSpacing = 30,
                        menuLeftPosition = element.offset().left,
                        menuWidth = element.children('.dropdown-menu').outerWidth(),
                        menuDropdownCSS = (windowWidth - menuSpacing) - (menuLeftPosition + menuWidth);
                    if (menuDropdownCSS < 0) {
                        element.children('.dropdown-menu').css('left', menuDropdownCSS)
                    }
                }
                if (element.parent().hasClass('dropdown-menu') && element.parents('.simple-dropdown')) {
                    var dropdownWidth = 0,
                        maxValueInArray = 0,
                        lastValue = 0,
                        multiDepth = 0,
                        linkDropdownouterWidth = 0;
                    if (linkDropdown.length > 0) {
                        linkDropdownouterWidth = linkDropdown.outerWidth()
                    }
                    dropdownWidth = element.outerWidth() - linkDropdownouterWidth;
                    element.find('.dropdown-menu').each(function() {
                        var arr = [];
                        if (element.find('li').hasClass('dropdown')) {
                            dropdownWidth = dropdownWidth + element.outerWidth();
                            element.find('li.dropdown').each(function() {
                                var dropdownMenu = element.closest('.dropdown-menu');
                                arr.push(dropdownMenu.outerWidth())
                            });
                            maxValueInArray = lastValue + Math.max.apply(Math, arr);
                            lastValue = maxValueInArray;
                            dropdownWidth = dropdownWidth + maxValueInArray;
                            multiDepth = multiDepth + 1
                        } else if (multiDepth < 1) {
                            dropdownWidth = dropdownWidth + element.outerWidth()
                        }
                    });
                    var menuRightPosition = windowWidth - (simpleDropdown.offset().left + simpleDropdown.outerWidth());
                    if (dropdownWidth > menuRightPosition) {
                        if (element.find('.dropdown-menu').length > 0) {
                            var menuTopPosition = element.position().top,
                                submenuObj = element.find('.dropdown-menu'),
                                submenuHeight = submenuObj.outerHeight(),
                                totalHeight = menuTopPosition + submenuHeight + getTopSpaceHeaderHeight(),
                                windowHeight = getWindowHeight();
                            if (totalHeight > windowHeight) {
                                submenuObj.css('top', '-' + (totalHeight - windowHeight) + 'px')
                            }
                        }
                        element.addClass('menu-left')
                    }
                }
            }

            function getTopSpaceHeaderHeight() {
                var mini_header_height = 0,
                    main_header_height = 0,
                    wpadminbarHeight = 0,
                    ts_height = 0;
                if ($('.admin-bar #wpadminbar').length > 0) {
                    wpadminbarHeight = $('.admin-bar #wpadminbar').outerHeight();
                    wpadminbarHeight = Math.round(wpadminbarHeight);
                    ts_height = ts_height + wpadminbarHeight
                }
                if ($('.mini-header-main-wrapper').length > 0) {
                    var mini_header_object = $('.mini-header-main-wrapper');
                    mini_header_height = mini_header_object.outerHeight();
                    ts_height = ts_height + mini_header_height
                }
                if ($('.header-common-wrapper.standard').length > 0) {
                    var main_header_object = $('.header-common-wrapper.standard');
                    main_header_height = main_header_object.outerHeight();
                    ts_height = ts_height + main_header_height
                }
                return ts_height
            }
            $(document).on('mouseenter touchstart', '.dropdown', function(e) {
                var _this = $(this);
                _this.addClass('open');
                if (_this.hasClass('open') && getWindowWidth() > tabletBreakPoint) {
                    _this.find('.dropdown-menu').removeClass('show')
                }
                _this.siblings('.dropdown').removeClass('open');
                if (getWindowWidth() >= tabletBreakPoint) {
                    menuPosition(_this);
                    if ($(e.target).siblings('.dropdown-menu').length) {
                        e.preventDefault()
                    }
                }
            }).on('mouseleave', '.dropdown', function() {
                var _this = $(this);
                _this.removeClass('menu-left');
                _this.removeClass('open')
            });
            var flag = !1;
            $(document).on('click', '.navbar-toggle', function(e) {
                if (getWindowWidth() >= tabletBreakPoint) {
                    if (!flag) {
                        flag = !0;
                        setTimeout(function() {
                            flag = !1
                        }, 500);
                        $('body').addClass('show-menu')
                    } else {
                        if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('show')) {
                            $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                            $('.navbar-collapse').find('ul.dropdown-menu').removeClass('show');
                            $('.navbar-collapse a.dropdown-toggle').removeClass('active')
                        }
                    }
                }
            });
            $('[data-mobile-nav-style="classic"] .navbar-collapse.collapse').on('show.bs.collapse', function() {
                var _self = $(this);
                if (!$('body').hasClass('navbar-collapse-show')) {
                    $('body').addClass('navbar-collapse-show')
                }
                setTimeout(function() {
                    var elementorContainerLeft = _self.offset().left;
                    _self.css('left', -(elementorContainerLeft))
                }, 100);
                setTimeout(function() {
                    if (!$('body').hasClass('navbar-collapse-show-after')) {
                        $('body').addClass('navbar-collapse-show-after')
                    }
                }, 100)
            }).on('hide.bs.collapse', function() {
                var _self = $(this);
                if ($('body').hasClass('navbar-collapse-show')) {
                    $('body').removeClass('navbar-collapse-show');
                    setTimeout(function() {
                        _self.css('left', '')
                    }, 400)
                }
                setTimeout(function() {
                    if ($('body').hasClass('navbar-collapse-show-after')) {
                        $('body').removeClass('navbar-collapse-show-after')
                    }
                }, 500)
            });
            var $navbarWidgetNavbar = $('.header-common-wrapper.standard .elementor-widget-litho-mega-menu .navbar-collapse');
            var $navbarWidgetNavbarToggle = $('.header-common-wrapper.standard .elementor-widget-litho-mega-menu .navbar-toggler');
            var mobileNavStyle = $('body').attr('data-mobile-nav-style');
            mobileClassicNavigation();

            function mobileClassicNavigation() {
                if (getWindowWidth() <= tabletBreakPoint) {
                    if (mobileNavStyle == 'classic') {
                        $('.elementor-widget-litho-mega-menu .navbar-collapse').css('width', getWindowWidth() + 'px')
                    }
                    if (mobileNavStyle == 'classic' && $navbarWidgetNavbar.length > 1 && !$('.navbar-nav-clone').length) {
                        $navbarWidgetNavbar.first().find('.navbar-nav').clone(!1).addClass('navbar-nav-clone').insertBefore($navbarWidgetNavbar.last().find('.navbar-nav'));
                        $navbarWidgetNavbar.last().addClass('navbar-collapse-clone')
                    }
                } else {
                    setTimeout(function() {
                        $('.elementor-widget-litho-mega-menu .navbar-collapse').css({
                            width: '',
                            left: ''
                        })
                    }, 400);
                    if (mobileNavStyle == 'classic' && $navbarWidgetNavbar.length > 1 && $('.navbar-nav-clone').length > 0) {
                        $navbarWidgetNavbar.last().removeClass('navbar-collapse-clone');
                        $navbarWidgetNavbar.last().find('.navbar-nav-clone').remove()
                    }
                }
            }
            navbarDropdown();

            function navbarDropdown() {
                if ($('.navbar-modern-inner').length > 0) {
                    if ($('.dropdown-toggle-clone').length > 0 && $.isFunction(window.dropdown)) {
                        $('.dropdown-toggle-clone').dropdown()
                    }
                } else {
                    if ($('.dropdown-toggle').length > 0 && $.isFunction(window.dropdown)) {
                        $('.dropdown-toggle').dropdown()
                    }
                }
            }
            $(window).on('orientationchange', function(e) {
                $('.close-menu').trigger('click');
                $(window).trigger('closemenu')
            });
            $(window).on('closemenu', function(e) {
                $('.dropdown').each(function() {
                    var _this = $(this);
                    _this.trigger('mouseleave');
                    _this.removeClass('show');
                    _this.children('.dropdown-menu').removeClass('show')
                });
                if ($('.navbar-collapse').hasClass('show')) {
                    $('.navbar-collapse').collapse('hide');
                    $('.navbar-collapse').removeClass('show')
                }
                if ($('body').hasClass('navbar-collapse-show')) {
                    $('body').removeClass('navbar-collapse-show')
                }
                setTimeout(function() {
                    if ($('body').hasClass('navbar-collapse-show-after')) {
                        $('body').removeClass('navbar-collapse-show-after')
                    }
                }, 500);
                setTimeout(function() {
                    $('.navbar-collapse').css('left', '')
                }, 400)
            })
        },
        packageCarouselInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        pageTitleInit: function($scope) {
            var $target = $('.litho-main-title-wrap', $scope).first();
            if ($target.length > 0) {
                if ($target.hasClass('colorful-style')) {
                    var pageTitleWrapper = $target,
                        colorList = pageTitleWrapper.attr('data-background-color') || '#2e94eb',
                        colorArray = colorList.split(','),
                        colorArray = colorList.split(','),
                        colorCount = colorArray.length,
                        i = 1,
                        colorCode;
                    pageTitleWrapper.css({
                        'background-color': colorArray[0]
                    });
                    setInterval(function() {
                        colorCode = colorArray[i];
                        pageTitleWrapper.css({
                            'background-color': colorCode
                        });
                        i++;
                        if (i === colorCount) {
                            i = 0
                        }
                    }, 5000)
                }
                if ($('[data-parallax-background-ratio]').length > 0) {
                    $('[data-parallax-background-ratio]').each(function() {
                        var ratio = $(this).attr('data-parallax-background-ratio') || 0.5;
                        $(this).parallax('50%', parseInt(ratio))
                    })
                }
                if ($('[data-parallax-layout-ratio]').length > 0) {
                    $('[data-parallax-layout-ratio]').each(function() {
                        var ratio = $(this).attr('data-parallax-layout-ratio') || 1;
                        $(this).parallaxImg(parseInt(ratio))
                    })
                }
                if ($('.page-title-slider').length > 0 && $.inArray('swiper', LithoMain.disable_scripts) < 0) {
                    var sliderAutoFade = new Swiper('.page-title-slider', {
                        loop: !0,
                        slidesPerView: 1,
                        effect: 'fade',
                        navigation: {
                            nextEl: '.swiper-auto-next',
                            prevEl: '.swiper-auto-prev'
                        },
                        keyboard: {
                            enabled: !0,
                            onlyInViewport: !0
                        },
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: !1
                        },
                        fadeEffect: {
                            crossFade: !0
                        },
                        on: {
                            resize: function() {
                                sliderAutoFade.update()
                            }
                        }
                    })
                }
            }
        },
        pieChartInit: function($scope) {
            var $target = $('.pie-charts', $scope).first(),
                $chart_percent = $target.find('.chart-percent'),
                $chart = $chart_percent.find('.chart'),
                $chart_size = $target.data('size'),
                $chart_trackColor = $chart.data('track-color'),
                $chart_lineWidth = $chart.data('line-width');
            if ($target.find('.chart').length > 0 && $.inArray('jquery-appear', LithoMain.disable_scripts) < 0) {
                $target.find('.chart').each(function() {
                    $(this).appear().trigger('resize')
                })
            }
            if ($target.find('.chart').length > 0 && $.inArray('easypiechart', LithoMain.disable_scripts) < 0) {
                var color1, color2;
                $target.on('appear', '.chart', function(e) {
                    $target.find('.chart').easyPieChart({
                        trackColor: $chart_trackColor,
                        scaleColor: "",
                        easing: 'easeInQuad',
                        lineCap: 'round',
                        lineWidth: $chart_lineWidth,
                        size: $chart_size,
                        barColor: function() {
                            color1 = $(this.el).attr('data-start-color') || $(this.el).attr('data-bar-color') || "#000";
                            color2 = $(this.el).attr('data-end-color') || $(this.el).attr('data-bar-color') || "#000";
                            var ctx = this.renderer.getCtx();
                            var canvas = this.renderer.getCanvas();
                            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 270);
                            gradient.addColorStop(0.2, color1);
                            gradient.addColorStop(0, color2);
                            return gradient
                        },
                        animate: {
                            duration: 2000,
                            enabled: !0,
                        },
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent) + "%")
                        }
                    })
                })
            }
        },
        portfolioInit: function($scope) {
            var arr_uniqueid = [],
                arr_dataid = [],
                hidedefault = !0,
                selector = '*',
                $grid_selectors = $scope.find('.grid-filter > li > a'),
                portfolio_grid_id = $scope.data('id'),
                $target = $('.portfolio-grid', $scope).first(),
                portfolio_filter_grid = $scope.find('.portfolio-grid'),
                uniqueId = portfolio_filter_grid.data('uniqueid'),
                portfolio_settings = $target.data('portfolio-settings') || {},
                $portfolio_slider = $('.portfolio-swiper-slider', $scope).first(),
                $portfolio_justified_gallery = $('.portfolio-justified-gallery', $scope).first(),
                portfolio_pagination_type = portfolio_settings.pagination_type,
                $portfolio_lastRow = $portfolio_justified_gallery.data('last-row') || {};
            $('.portfolio-grid').each(function() {
                arr_uniqueid.push($(this).attr('data-uniqueid'))
            });
            if ($('.' + uniqueId).length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0 && ('litho-portfolio.default' === $scope.data('widget_type') || 'litho-archive-portfolio.default' === $scope.data('widget_type'))) {
                var portfolio_filter = $('.' + uniqueId).not('.portfolio-justified-gallery').imagesLoaded(function() {
                    $('.' + uniqueId).removeClass('grid-loading');
                    portfolio_filter.isotope({
                        layoutMode: 'masonry',
                        itemSelector: '.grid-item',
                        percentPosition: !0,
                        stagger: 0,
                        masonry: {
                            columnWidth: '.grid-sizer'
                        }
                    });
                    portfolio_filter.isotope();
                    var $element = $('.' + uniqueId).find('.litho-animated');
                    portfolio_list_animation($element)
                })
            } else {
                if ($('.' + uniqueId).length > 0) {
                    var $element = $('.' + uniqueId).removeClass('grid-loading').find('.litho-animated').css('float', 'left');
                    portfolio_list_animation($element)
                }
            }
            $('.grid-filter > li.active > a').each(function(index) {
                var selector = $(this).data('filter'),
                    _this_id = $(this).data('id'),
                    _grand_parent = $(this).parent().parent();
                if ('*' != selector) {
                    hidedefault = !1;
                    if ($.inArray(_this_id, arr_dataid) == -1) {
                        arr_dataid.push(_this_id)
                    }
                    _grand_parent.attr('data-infinite', 'false')
                } else {
                    hidedefault = !0;
                    var idx = arr_dataid.indexOf(_this_id);
                    if (idx >= 0) {
                        arr_dataid.splice(idx, 1)
                    }
                    _grand_parent.attr('data-infinite', 'true')
                }
                default_selector(hidedefault)
            });
            $grid_selectors.on('click.grid-filter', function() {
                var selector = $(this).data('filter'),
                    _parent = $(this).parent(),
                    _grand_parent = $(this).parent().parent(),
                    _this_id = $(this).data('id');
                if ('*' != selector) {
                    var $portfolioinfinite = portfolioinfiniteScroll(_this_id);
                    if ($.inArray(_this_id, arr_dataid) == -1) {
                        arr_dataid.push(_this_id)
                    }
                    _grand_parent.attr('data-infinite', 'false');
                    if ($portfolioinfinite.length > 0 && $.inArray('infinite-scroll', LithoMain.disable_scripts) < 0) {
                        $portfolioinfinite.infiniteScroll({
                            scrollThreshold: !1,
                            loadOnScroll: !1
                        })
                    }
                    $('.' + _this_id).parent().find('.litho-pagination').hide();
                    $(selector).parent().find('.litho-animated').removeAttr('data-animation data-animation-delay').removeClass('litho-animated animated fadeIn elementor-invisible');
                    $('.elementor-invisible').each(function() {
                        var _self = $(this);
                        if (!_self.hasClass('animated')) {
                            _self.removeClass('elementor-invisible').addClass('litho-elementor-visible')
                        }
                    });
                    LithoAddonsInit.AnimationonFilterOnClick()
                } else {
                    var idx = arr_dataid.indexOf(_this_id);
                    if (idx >= 0) {
                        arr_dataid.splice(idx, 1)
                    }
                    _grand_parent.attr('data-infinite', 'true');
                    portfolioinfiniteScroll(_this_id);
                    $('.' + _this_id).parent().find('.litho-pagination').show();
                    $('.litho-elementor-visible').each(function() {
                        var _self = $(this);
                        if (!_self.hasClass('animated')) {
                            _self.removeClass('litho-elementor-visible').addClass('elementor-invisible')
                        }
                    })
                }
                if ('' != _this_id) {
                    $grid_selectors = $('#' + _this_id + ' > li > a');
                    $grid_selectors.parent().removeClass('active');
                    _parent.addClass('active');
                    if ($('.' + _this_id).hasClass('portfolio-justified-gallery') && $.inArray('justified-gallery', LithoMain.disable_scripts) < 0) {
                        $('.' + _this_id).justifiedGallery({
                            filter: selector
                        })
                    } else {
                        if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                            $('.' + _this_id).isotope({
                                filter: selector
                            })
                        }
                    }
                } else {
                    $grid_selectors.parent().removeClass('active');
                    _parent.addClass('active');
                    if (portfolio_filter.hasClass('portfolio-justified-gallery') && $.inArray('justified-gallery', LithoMain.disable_scripts) < 0) {
                        portfolio_filter.justifiedGallery({
                            filter: selector
                        })
                    } else {
                        if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                            portfolio_filter.isotope({
                                filter: selector
                            })
                        }
                    }
                }
                return !1
            });
            portfolio_infinite_arr(arr_dataid, selector);

            function portfolio_list_animation($element) {
                elementorFrontend.waypoint($element, function() {
                    var _this = $(this),
                        dataAnimation = _this.attr('data-animation') || '',
                        dataAnimationDelay = _this.attr('data-animation-delay') || 0;
                    if ('' === dataAnimation || 'none' === dataAnimation) {
                        _this.removeClass('elementor-invisible');
                        return
                    }
                    setTimeout(function() {
                        _this.removeClass('elementor-invisible').addClass('animated ' + dataAnimation)
                    }, dataAnimationDelay)
                })
            }

            function default_selector(hidedefault) {
                if ($.inArray('isotope', LithoMain.disable_scripts) < 0) {
                    $('.grid-filter').each(function() {
                        if ($('#' + $(this).attr('data-id') + ' > li.active > a').attr('data-id') != '') {
                            var portfolio_filter = $('.' + $(this).find('li.active a').attr('data-id')),
                                data_id = $('#' + $(this).find('li.active a').attr('data-id')).find('li.active a').attr('data-filter'),
                                portfolio_selector = data_id;
                            portfolio_filter.isotope({
                                layoutMode: 'masonry',
                                itemSelector: '.grid-item',
                                percentPosition: !0,
                                masonry: {
                                    columnWidth: '.grid-sizer'
                                },
                                filter: portfolio_selector
                            })
                        }
                    })
                }
            }

            function portfolio_infinite_arr(arr_dataid, selector) {
                if ($('#' + uniqueId).length > 0 && $scope.data('widget_type') === 'litho-portfolio-filter.default') {
                    var hideinfinite = $('#' + uniqueId).data('infinite')
                } else {
                    var hideinfinite = !0
                }
                if ($.inArray(uniqueId, arr_dataid) == -1 && (hideinfinite || typeof(hideinfinite) != 'undefined') && $scope.data('widget_type') === 'litho-portfolio.default') {
                    portfolio_append_posts(uniqueId)
                } else if ($('#' + uniqueId).length === 0 && $('.' + uniqueId).length > 0 && ('litho-portfolio.default' === $scope.data('widget_type') || 'litho-archive-portfolio.default' === $scope.data('widget_type'))) {
                    portfolio_append_posts(uniqueId)
                }
            }

            function portfolio_append_posts(uniqueId) {
                var $portfolioinfinite = portfolioinfiniteScroll(uniqueId);
                if ($portfolioinfinite.length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0 && $.inArray('infinite-scroll', LithoMain.disable_scripts) < 0 && $('.' + uniqueId).length > 0 && typeof($('.' + uniqueId)) != 'undefined') {
                    $portfolioinfinite.on('append.infiniteScroll', function(event, response, path, items) {
                        var $newportfoliogpost = $(items);
                        $newportfoliogpost.imagesLoaded(function() {
                            $('.' + uniqueId).isotope('appended', $newportfoliogpost);
                            $('.' + uniqueId).isotope('layout');
                            LithoAddonsInit.defaultentranceAnimation($('.' + uniqueId));
                            LithoAddonsInit.defaultLightboxGallery();
                            if ($portfolio_justified_gallery.length > 0 && $.inArray('justified-gallery', LithoMain.disable_scripts) < 0) {
                                $portfolio_justified_gallery.justifiedGallery('norewind')
                            }
                        })
                    });
                    $portfolioinfinite.on('last.infiniteScroll', function(event, response, path) {
                        $('.page-load-status').hide();
                        setTimeout(function() {
                            $('.page-load-status').show()
                        }, 500);
                        setTimeout(function() {
                            $('.page-load-status').hide()
                        }, 2500)
                    })
                }
            }

            function portfolioinfiniteScroll(portfolio_val) {
                var selector, $portfolioinfinite = '',
                    portfolio_grid_id = $('.' + portfolio_val).parents('.elementor-widget').data('id'),
                    elementorElement = '.elementor-element-' + portfolio_grid_id;
                if (portfolio_val != '' && typeof(portfolio_val) != 'undefined') {
                    selector = '.' + portfolio_val + '.portfolio-infinite-scroll-pagination'
                } else {
                    selector = '.portfolio-infinite-scroll-pagination'
                }
                var selectorItem = elementorElement + ' .portfolio-grid .portfolio-single-post';
                if ($(elementorElement + ' div.litho-portfolio-infinite-scroll a').length > 0 && $.inArray('infinite-scroll', LithoMain.disable_scripts) < 0) {
                    if ('load-more-pagination' === portfolio_pagination_type) {
                        $portfolioinfinite = $(selector).infiniteScroll({
                            path: elementorElement + ' div.litho-portfolio-infinite-scroll a',
                            history: !1,
                            navSelector: elementorElement + ' div.litho-portfolio-infinite-scroll',
                            contentSelector: selector,
                            append: selectorItem,
                            status: elementorElement + ' .page-load-status',
                            scrollThreshold: !1,
                            button: elementorElement + ' .view-more-button'
                        })
                    } else {
                        $portfolioinfinite = $(selector).infiniteScroll({
                            path: elementorElement + ' div.litho-portfolio-infinite-scroll a',
                            history: !1,
                            navSelector: elementorElement + ' div.litho-portfolio-infinite-scroll',
                            contentSelector: selector,
                            append: selectorItem,
                            scrollThreshold: 100,
                            loadOnScroll: !0,
                            status: elementorElement + ' .page-load-status'
                        })
                    }
                }
                return $portfolioinfinite
            }
            LithoAddonsInit.defaultJustifiedGallery($portfolio_justified_gallery, $portfolio_lastRow)
        },
        portfolioFilterInit: function($scope) {
            LithoAddonsInit.portfolioInit($scope)
        },
        portfolioSliderInit: function($scope) {
            var $target = $('.portfolio-swiper-slider', $scope).first(),
                settings = $target.data('settings') || {},
                breakpointsSettings = {},
                breakpoints = elementorFrontend.config.breakpoints,
                swiperObjs = [];
            if ($target.length === 0) {
                return
            }
            breakpointsSettings[breakpoints.lg] = {
                slidesPerView: settings.slides_to_show || 1,
            };
            breakpointsSettings[breakpoints.md] = {
                slidesPerView: settings.slides_to_show_tablet || 1,
            };
            breakpointsSettings[breakpoints.xs] = {
                slidesPerView: settings.slides_to_show_mobile || 1,
            };

            function setupSwiper() {
                var swiperOptions = {
                    slidesPerView: settings.slides_to_show,
                    loop: 'yes' === settings.loop,
                    speed: settings.speed,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0
                    },
                    breakpoints: breakpointsSettings,
                    on: {
                        resize: function() {
                            swiperObj.update()
                        }
                    }
                };
                if (settings.effect) {
                    swiperOptions.effect = settings.effect
                }
                if ('yes' === settings.centered_slides) {
                    swiperOptions.centeredSlides = !0
                }
                if (typeof(settings.image_spacing) !== 'undefined' && settings.image_spacing.size !== '' && settings.image_spacing.size !== null) {
                    swiperOptions.spaceBetween = settings.image_spacing.size
                }
                if ('fade' === settings.effect) {
                    swiperOptions.fadeEffect = {
                        crossFade: !0
                    }
                }
                if ('yes' === settings.autoplay) {
                    swiperOptions.autoplay = {
                        delay: settings.autoplay_speed
                    };
                    if (settings.pause_on_hover) {
                        $($target).on('mouseenter', function() {
                            swiperObj.autoplay.stop()
                        });
                        $($target).on('mouseleave', function() {
                            swiperObj.autoplay.start()
                        })
                    }
                }
                if ('yes' === settings.mousewheel) {
                    swiperOptions.mousewheel = !0
                }
                var showArrows = 'arrows' === settings.navigation || 'both' === settings.navigation,
                    showDots = 'dots' === settings.navigation || 'both' === settings.navigation || 'yes' === settings.navigation_dynamic_bullets;
                if (showArrows) {
                    swiperOptions.navigation = {
                        prevEl: '.elementor-swiper-button-prev',
                        nextEl: '.elementor-swiper-button-next'
                    }
                }
                if (showDots) {
                    swiperOptions.pagination = {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: !0,
                        dynamicBullets: settings.navigation_dynamic_bullets,
                    }
                }
                if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                    var swiperObj = new Swiper($target, swiperOptions);
                    swiperObjs.push(swiperObj)
                }
            }

            function destroySwiperLoop() {
                for (var i = 0; i < swiperObjs.length; i++) {
                    var swiperObj = swiperObjs[i];
                    if (getWindowWidth() <= tabletBreakPoint) {
                        swiperObj.destroy(!1, !0)
                    } else if (swiperObj.destroyed) {
                        swiperObjs.splice(i, 1);
                        setupSwiper()
                    }
                }
            }
            if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                if ('portfolio-slider-style-1' === settings['slider-style']) {
                    setupSwiper();
                    destroySwiperLoop();
                    $(window).on('resize', function() {
                        destroySwiperLoop()
                    })
                } else {
                    setupSwiper()
                }
            }
            var $tiltbox = $target.find('.tilt-box');
            if ($tiltbox.length > 0 && !isMobile && $.inArray('tilt', LithoMain.disable_scripts) < 0) {
                $tiltbox.each(function() {
                    var _self = $(this);
                    _self.tilt({
                        maxTilt: 20,
                        perspective: 1000,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                        scale: 1,
                        speed: 500,
                        transition: !0,
                        disableAxis: null,
                        reset: !0,
                        glare: !1,
                        maxGlare: 1
                    })
                })
            }
        },
        progressBarInit: function($scope) {
            elementorFrontend.waypoint($scope, function() {
                var $progressbar = $scope.find('.elementor-progress-bar');
                if ($progressbar.length > 0) {
                    $progressbar.css('width', $progressbar.data('max') + '%')
                }
            })
        },
        searchFormInit: function($scope) {
            var $target = $('.search-form-wrapper', $scope).first();
            $(document).on('click', '.search-form-icon', function(e) {
                e.preventDefault();
                var _parents = $(this).parents('.mini-header-main-wrapper');
                if (_parents.length > 0) {
                    $('body').addClass('show-search-popup-mini-header')
                }
                $('.search-form-wrapper').addClass('active-form');
                $('body').addClass('show-search-popup')
            });
            $(document).on('click', '.search-close', function(e) {
                e.preventDefault();
                var _parents = $(this).parents('.mini-header-main-wrapper');
                $('.search-form-wrapper').removeClass('active-form');
                if (_parents.length > 0) {
                    $('body').removeClass('show-search-popup-mini-header')
                }
                $('body').removeClass('show-search-popup')
            });
            $(document).on('touchstart click', function(e) {
                if ($(e.target).closest('.search-form-wrapper').length === 0 || $(e.target).is('.form-wrapper')) {
                    $('.search-form-wrapper').removeClass('active-form');
                    $('body').removeClass('show-search-popup')
                }
            });
            $(document).on('keydown', function(e) {
                if (e.keyCode === 27) {
                    $('.search-form-wrapper').removeClass('active-form');
                    $('body').removeClass('show-search-popup')
                }
            })
        },
        sliderInit: function($scope) {
            var $target = $('.elementor-image-carousel-wrapper', $scope).first(),
                settings = $target.data('settings') || {},
                breakpointsSettings = {},
                breakpoints = elementorFrontend.config.breakpoints;
            if ($target.length === 0) {
                return
            }
            if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                breakpointsSettings[breakpoints.lg] = {
                    slidesPerView: settings.slides_to_show || 1,
                };
                breakpointsSettings[breakpoints.md] = {
                    slidesPerView: settings.slides_to_show_tablet || 1,
                };
                breakpointsSettings[breakpoints.xs] = {
                    slidesPerView: settings.slides_to_show_mobile || 1,
                };
                var swiperOptions = {
                    slidesPerView: settings.slides_to_show,
                    loop: 'yes' === settings.loop,
                    speed: settings.speed,
                    breakpoints: breakpointsSettings,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0,
                    },
                    on: {
                        resize: function() {
                            sliderswiperObj.update()
                        }
                    }
                };
                if ('vertical' == settings.direction) {
                    swiperOptions.iOSEdgeSwipeThreshold = 200;
                    swiperOptions.touchReleaseOnEdges = !0
                }
                if (settings.direction) {
                    swiperOptions.direction = settings.direction
                }
                swiperOptions.on = {
                    init: function() {
                        fullScreenSlideHeight();
                        if (settings.direction) {
                            if (getWindowWidth() <= tabletBreakPoint) {
                                if ('yes' == settings.litho_direction_mobile) {
                                    this.changeDirection(settings.direction)
                                } else {
                                    this.changeDirection('horizontal')
                                }
                            } else {
                                this.changeDirection(settings.direction)
                            }
                            this.update()
                        }
                    },
                    resize: function() {
                        fullScreenSlideHeight();
                        if (settings.direction) {
                            if (getWindowWidth() <= tabletBreakPoint) {
                                if ('yes' == settings.litho_direction_mobile) {
                                    this.changeDirection(settings.direction)
                                } else {
                                    this.changeDirection('horizontal')
                                }
                            } else {
                                this.changeDirection(settings.direction)
                            }
                            var _this = this;
                            setTimeout(function() {
                                _this.update()
                            }, 10)
                        }
                    }
                };
                if (settings.effect) {
                    swiperOptions.effect = settings.effect
                }
                if ('yes' === settings.centered_slides) {
                    swiperOptions.centeredSlides = !0
                }
                if ('yes' === settings.number_pagination && settings.number_pagination != undefined) {
                    swiperOptions.on.slideChange = function() {
                        if ($('.swiper-pagination-current').length > 0) {
                            $('.swiper-pagination-current').html(pad(this.realIndex + 1, 2))
                        }
                        if ($('.swiper-pagination-total').length > 0) {
                            $('.swiper-pagination-total').html(pad(this.slides.length - 2, 2))
                        }
                    }
                }
                if ('fade' === settings.effect) {
                    swiperOptions.fadeEffect = {
                        crossFade: !0
                    }
                }
                if ('yes' === settings.autoplay) {
                    swiperOptions.autoplay = {
                        delay: settings.autoplay_speed,
                        disableOnInteraction: !1
                    };
                    if (settings.pause_on_hover) {
                        $($target).on('mouseenter', function() {
                            sliderswiperObj.autoplay.stop()
                        });
                        $($target).on('mouseleave', function() {
                            sliderswiperObj.autoplay.start()
                        })
                    }
                }
                if ('yes' === settings.mousewheel) {
                    swiperOptions.mousewheel = !0
                }
                var showArrows = 'arrows' === settings.navigation || 'both' === settings.navigation,
                    showDots = 'dots' === settings.navigation || 'both' === settings.navigation || 'yes' === settings.navigation_dynamic_bullets;
                if (showArrows) {
                    swiperOptions.navigation = {
                        prevEl: '.elementor-swiper-button-prev',
                        nextEl: '.elementor-swiper-button-next'
                    }
                }
                if (showDots) {
                    swiperOptions.pagination = {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: !0,
                        dynamicBullets: settings.navigation_dynamic_bullets,
                    }
                }
                var sliderswiperObj = new Swiper($target, swiperOptions)
            }

            function pad(d) {
                return (d < 10) ? '0' + d.toString() : d.toString()
            }
        },
        splitPortfolioSliderInit: function($scope) {
            var $target = $('.slider-split-scroll', $scope).first(),
                settings = $target.data('settings') || {},
                swiperObjs = [];
            if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                function setupSwiper() {
                    var swiperOptions = {
                        direction: 'vertical',
                        loop: 'yes' === settings.loop,
                        speed: settings.speed || 600,
                        mousewheel: 'yes' === settings.mousewheel,
                        allowTouchMove: !0,
                        iOSEdgeSwipeThreshold: 200,
                        keyboard: {
                            enabled: !0,
                            onlyInViewport: !0,
                        },
                        effect: "fade"
                    };
                    if ('yes' === settings.autoplay) {
                        swiperOptions.autoplay = {
                            delay: settings.autoplay_speed
                        };
                        if (settings.pause_on_hover) {
                            $($target).on('mouseenter', function() {
                                swiperObj.autoplay.stop()
                            });
                            $($target).on('mouseleave', function() {
                                swiperObj.autoplay.start()
                            })
                        }
                    }
                    if ('dots' === settings.navigation) {
                        swiperOptions.pagination = {
                            el: '.swiper-pagination-split-scroll',
                            clickable: !0
                        }
                    }
                    var swiperObj = new Swiper($target, swiperOptions);
                    swiperObjs.push(swiperObj)
                }

                function destroySwiperLoop() {
                    for (var i = 0; i < swiperObjs.length; i++) {
                        var swiperObj = swiperObjs[i];
                        if (getWindowWidth() <= tabletBreakPoint) {
                            swiperObj.destroy(!1, !0)
                        } else if (swiperObj.destroyed) {
                            swiperObjs.splice(i, 1);
                            setupSwiper()
                        }
                    }
                }
                setupSwiper();
                destroySwiperLoop();
                $(window).on('resize', function() {
                    destroySwiperLoop()
                })
            }
            if ($('body').hasClass('elementor-editor-active') && $('.full-screen-height').length > 0) {
                var wpadminbarHeight = 0;
                if ($('.admin-bar #wpadminbar').length > 0) {
                    wpadminbarHeight = $('.admin-bar #wpadminbar').outerHeight();
                    wpadminbarHeight = Math.round(wpadminbarHeight)
                }
                $('.full-screen-height').each(function() {
                    var _self = $(this);
                    var _height = getWindowHeight();
                    setTimeout(function() {
                        if (getWindowWidth() <= tabletBreakPoint) {
                            var fulltotalHeight = wpadminbarHeight;
                            _self.css('height', (_height - fulltotalHeight))
                        } else {
                            _self.css('height', (_height - wpadminbarHeight))
                        }
                    }, 500)
                })
            }
        },
        teamMemeberCarouselInit: function($scope) {
            LithoAddonsInit.defaultSwiperSlider($scope)
        },
        testimonialCarouselInit: function($scope) {
            var $target = $('.elementor-testimonial-carousel-wrapper', $scope).first(),
                settings = $target.data('settings') || {},
                layoutType = $target.data('layout-type') || {},
                breakpointsSettings = {},
                breakpoints = elementorFrontend.config.breakpoints,
                sliderAvtarImage = $target.find('.testimonial-image'),
                thumbsSlider = $scope.find('.slider-review-image');
            if ($target.length === 0) {
                return
            }
            if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                breakpointsSettings[breakpoints.lg] = {
                    slidesPerView: settings.slides_to_show || 1,
                };
                breakpointsSettings[breakpoints.md] = {
                    slidesPerView: settings.slides_to_show_tablet || 1,
                };
                breakpointsSettings[breakpoints.xs] = {
                    slidesPerView: settings.slides_to_show_mobile || 1,
                };
                var swiperOptions = {
                    slidesPerView: settings.slides_to_show || 1,
                    loop: 'yes' === settings.loop,
                    speed: settings.speed,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0
                    },
                    breakpoints: breakpointsSettings,
                    on: {
                        resize: function() {
                            testimonialCarouselSwiper.update()
                        }
                    },
                };
                if (settings.effect) {
                    swiperOptions.effect = settings.effect
                }
                if ('fade' === settings.effect) {
                    swiperOptions.fadeEffect = {
                        crossFade: !0
                    }
                }
                if ('yes' === settings.coverflowEffect) {
                    swiperOptions.effect = 'coverflow';
                    swiperOptions.coverflowEffect = {
                        rotate: 0,
                        stretch: 100,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: !0
                    }
                }
                if (typeof(settings.image_spacing) !== 'undefined' && settings.image_spacing.size !== '' && settings.image_spacing.size !== null) {
                    swiperOptions.spaceBetween = settings.image_spacing.size
                }
                if ('yes' === settings.autoplay) {
                    swiperOptions.autoplay = {
                        delay: settings.autoplay_speed
                    };
                    if (settings.pause_on_hover) {
                        $($target).on('mouseenter', function() {
                            testimonialCarouselSwiper.autoplay.stop()
                        });
                        $($target).on('mouseleave', function() {
                            testimonialCarouselSwiper.autoplay.start()
                        })
                    }
                }
                var showArrows = 'arrows' === settings.navigation || 'both' === settings.navigation || 'both_thumb' === settings.navigation,
                    showDots = 'dots' === settings.navigation || 'both' === settings.navigation || 'yes' === settings.navigation_dynamic_bullets,
                    show_custom = 'custom' === settings.navigation || 'both_thumb' === settings.navigation;
                if ('yes' === settings.centered_slides) {
                    swiperOptions.centeredSlides = !0
                }
                if (layoutType !== 'testimonial-carousel-style-7') {
                    if (showArrows) {
                        swiperOptions.navigation = {
                            prevEl: '.elementor-swiper-button-prev',
                            nextEl: '.elementor-swiper-button-next'
                        }
                    }
                    if (showDots) {
                        swiperOptions.pagination = {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: !0,
                            dynamicBullets: settings.navigation_dynamic_bullets,
                        }
                    }
                    if (show_custom) {
                        swiperOptions.pagination = {
                            el: '.slider-custom-image-pagination',
                            clickable: !0,
                            renderBullet: function(index, className) {
                                var imgSrc = $(sliderAvtarImage[index]).attr('src');
                                var paginationHTML = '';
                                paginationHTML += '<span class="cover-background ';
                                paginationHTML += className;
                                paginationHTML += '" style="background: url(';
                                paginationHTML += imgSrc;
                                paginationHTML += ')"></span>';
                                return paginationHTML
                            },
                        }
                    }
                } else {
                    swiperOptions.allowTouchMove = !1;
                    if (showArrows) {
                        swiperOptions.navigation = {
                            prevEl: '.elementor-swiper-button-prev',
                            nextEl: '.elementor-swiper-button-next'
                        }
                    }
                    if (thumbsSlider.length > 0) {
                        swiperOptions.thumbs = {
                            swiper: {
                                el: thumbsSlider,
                                slidesPerView: 1,
                                spaceBetween: 10,
                                simulateTouch: !1,
                            },
                        }
                    }
                    swiperOptions.on = {
                        click: function() {
                            if (this.activeIndex > this.clickedIndex) {
                                this.slidePrev()
                            } else if (this.activeIndex < this.clickedIndex) {
                                this.slideNext()
                            }
                        }
                    }
                }
                var testimonialCarouselSwiper = new Swiper($target, swiperOptions)
            }
        },
        textRotatorInit: function($scope) {
            var $target = $('.cd-headline', $scope).first();
            var $target_letters = $('.cd-headline.letters', $scope).first();
            if ($target.length > 0) {
                var animationDelay = 2500,
                    barAnimationDelay = 3800,
                    barWaiting = barAnimationDelay - 3000,
                    lettersDelay = 50,
                    typeLettersDelay = 150,
                    selectionDuration = 500,
                    typeAnimationDelay = selectionDuration + 800,
                    revealDuration = 600,
                    revealAnimationDelay = 1500;
                initHeadline();

                function initHeadline() {
                    singleLetters($('.cd-headline.letters').find('b'));
                    animateHeadline($target)
                }

                function singleLetters($words) {
                    $words.each(function() {
                        var word = $(this),
                            letters = word.text().split(''),
                            selected = word.hasClass('is-visible');
                        for (var i in letters) {
                            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>'
                        }
                        var newLetters = letters.join('');
                        word.html(newLetters).css('opacity', 1)
                    })
                }

                function animateHeadline($headlines) {
                    var duration = animationDelay;
                    $headlines.each(function() {
                        var headline = $(this);
                        if (headline.hasClass('loading-bar')) {
                            duration = barAnimationDelay;
                            setTimeout(function() {
                                headline.find('.cd-words-wrapper').addClass('is-loading')
                            }, barWaiting)
                        } else if (headline.hasClass('clip')) {
                            var spanWrapper = headline.find('.cd-words-wrapper'),
                                newWidth = spanWrapper.width() + 10;
                            spanWrapper.css('width', newWidth)
                        } else if (!headline.hasClass('type')) {
                            var words = headline.find('.cd-words-wrapper b'),
                                width = 0;
                            words.each(function() {
                                var wordWidth = $(this).width();
                                if (wordWidth > width) width = wordWidth
                            });
                            headline.find('.cd-words-wrapper').css('width', width)
                        };
                        setTimeout(function() {
                            hideWord(headline.find('.is-visible').eq(0))
                        }, duration)
                    })
                }

                function hideWord($word) {
                    var nextWord = takeNext($word);
                    if ($word.parents('.cd-headline').hasClass('type')) {
                        var parentSpan = $word.parent('.cd-words-wrapper');
                        parentSpan.addClass('selected').removeClass('waiting');
                        setTimeout(function() {
                            parentSpan.removeClass('selected');
                            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out')
                        }, selectionDuration);
                        setTimeout(function() {
                            showWord(nextWord, typeLettersDelay)
                        }, typeAnimationDelay)
                    } else if ($word.parents('.cd-headline').hasClass('letters')) {
                        var bool = ($word.children('i').length >= nextWord.children('i').length) ? !0 : !1;
                        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay)
                    } else if ($word.parents('.cd-headline').hasClass('clip')) {
                        $word.parents('.cd-words-wrapper').animate({
                            width: '2px'
                        }, revealDuration, function() {
                            switchWord($word, nextWord);
                            showWord(nextWord)
                        })
                    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
                        $word.parents('.cd-words-wrapper').removeClass('is-loading');
                        switchWord($word, nextWord);
                        setTimeout(function() {
                            hideWord(nextWord)
                        }, barAnimationDelay);
                        setTimeout(function() {
                            $word.parents('.cd-words-wrapper').addClass('is-loading')
                        }, barWaiting)
                    } else {
                        switchWord($word, nextWord);
                        setTimeout(function() {
                            hideWord(nextWord)
                        }, animationDelay)
                    }
                }

                function showWord($word, $duration) {
                    if ($word.parents('.cd-headline').hasClass('type')) {
                        showLetter($word.find('i').eq(0), $word, !1, $duration);
                        $word.addClass('is-visible').removeClass('is-hidden')
                    } else if ($word.parents('.cd-headline').hasClass('clip')) {
                        $word.parents('.cd-words-wrapper').animate({
                            'width': $word.width() + 10
                        }, revealDuration, function() {
                            setTimeout(function() {
                                hideWord($word)
                            }, revealAnimationDelay)
                        })
                    }
                }

                function hideLetter($letter, $word, $bool, $duration) {
                    $letter.removeClass('in').addClass('out');
                    if (!$letter.is(':last-child')) {
                        setTimeout(function() {
                            hideLetter($letter.next(), $word, $bool, $duration)
                        }, $duration)
                    } else if ($bool) {
                        setTimeout(function() {
                            hideWord(takeNext($word))
                        }, animationDelay)
                    }
                    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                        var nextWord = takeNext($word);
                        switchWord($word, nextWord)
                    }
                }

                function showLetter($letter, $word, $bool, $duration) {
                    $letter.addClass('in').removeClass('out');
                    if (!$letter.is(':last-child')) {
                        setTimeout(function() {
                            showLetter($letter.next(), $word, $bool, $duration)
                        }, $duration)
                    } else {
                        if ($word.parents('.cd-headline').hasClass('type')) {
                            setTimeout(function() {
                                $word.parents('.cd-words-wrapper').addClass('waiting')
                            }, 200)
                        }
                        if (!$bool) {
                            setTimeout(function() {
                                hideWord($word)
                            }, animationDelay)
                        }
                    }
                }

                function takeNext($word) {
                    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0)
                }

                function takePrev($word) {
                    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last()
                }

                function switchWord($oldWord, $newWord) {
                    $oldWord.removeClass('is-visible').addClass('is-hidden');
                    $newWord.removeClass('is-hidden').addClass('is-visible')
                }
            }
        },
        tiltBoxInit: function($scope) {
            var $target = $('.tilt-box-wrapper', $scope).first(),
                $tiltbox = $target.find('.tilt-box');
            LithoAddonsInit.defaultTiltbox($tiltbox)
        },
        verticalCounterInit: function($scope) {
            var $target = $('.vertical-counter-wrapper', $scope).first(),
                content = null,
                $counter = $target.find('.vertical-counter'),
                counter_value = $counter.data('value'),
                individual_value = counter_value.toString().split(''),
                value_length = individual_value.length,
                wrapper = wp.template('vertical-counter');
            content = wrapper();
            for (var i = 0; i < value_length; i++) {
                $counter.append(content);
                $counter.find('.vertical-counter-number').each(function(index) {
                    $(this).attr('data-value', individual_value[index])
                })
            }
            verticalCounterHeight();

            function verticalCounterHeight() {
                $counter.each(function() {
                    var fontSize = $(this).css('font-size');
                    $(this).css('height', fontSize);
                    $(this).find('.vertical-counter-number').each(function() {
                        var div_height = $(this).find('li').height();
                        $(this).height(div_height)
                    })
                })
            }
            $(window).on('resize', function(event) {
                verticalCounterHeight()
            });
            if ($.inArray('jquery-appear', LithoMain.disable_scripts) < 0) {
                $counter.appear();
                if ($counter.is(':appeared')) {
                    countertranslateY()
                } else {
                    $(document.body).on('appear', $counter, function(e) {
                        countertranslateY()
                    })
                }
            }

            function countertranslateY() {
                if ($(window).scrollTop() + $(window).height() >= $counter.offset().top) {
                    $counter.find('.vertical-counter-number').each(function() {
                        var value = $(this).data('value');
                        var div_height = $(this).find('li').height();
                        $(this).height(div_height);
                        if (value <= 9) {
                            $(this).find('ul').css({
                                'transform': 'translateY(-' + value * 10 + '%)'
                            })
                        }
                    })
                }
            }
        },
        popupInit: function($scope) {
            if ($('.modal-popup').length > 0 && $.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                $('.modal-popup').magnificPopup({
                    type: 'inline',
                    mainClass: 'litho-modal-popup',
                    preloader: !1,
                    closeBtnInside: !0,
                    blackbg: !0,
                })
            }
            if ($('.popup-with-zoom-anim').length > 0 && $.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                $('.popup-with-zoom-anim').magnificPopup({
                    type: 'inline',
                    fixedBgPos: !0,
                    overflowY: 'auto',
                    fixedContentPos: !0,
                    closeBtnInside: !0,
                    preloader: !1,
                    midClick: !0,
                    removalDelay: 300,
                    blackbg: !0,
                    mainClass: 'my-mfp-zoom-in modal-zoom-popup'
                })
            }
            if ($('.popup-with-move-anim').length > 0 && $.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                $('.popup-with-move-anim').magnificPopup({
                    type: 'inline',
                    fixedBgPos: !0,
                    overflowY: 'auto',
                    fixedContentPos: !0,
                    closeBtnInside: !0,
                    preloader: !1,
                    midClick: !0,
                    removalDelay: 300,
                    blackbg: !0,
                    mainClass: 'my-mfp-slide-bottom modal-slide-popup'
                })
            }
            if ($('.popup-with-form').length > 0 && $.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                $('.popup-with-form').magnificPopup({
                    type: 'inline',
                    preloader: !1,
                    mainClass: 'litho-contant-form-popup',
                    fixedContentPos: !0,
                    closeBtnInside: !1,
                })
            }
            if ($.inArray('magnific-popup', LithoMain.disable_scripts) < 0 && ($('.popup-youtube').length > 0 || $('.popup-vimeo').length > 0 || $('.popup-googlemap').length > 0)) {
                $('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({
                    preloader: !1,
                    type: 'iframe',
                    mainClass: 'mfp-fade litho-video-popup',
                    removalDelay: 160,
                    fixedContentPos: !0,
                    closeBtnInside: !1,
                })
            }
            $(document).on('click', '.popup-modal-dismiss', function(e) {
                e.preventDefault();
                if ($.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                    $.magnificPopup.close()
                }
            });
            var subscribe_form_cookie_name = 'litho_subscribe_form_popup_auto' + LithoFrontend.site_id;
            var subscribe_form_popup = getLithoCookie(subscribe_form_cookie_name);
            if ($('.subscribe-pop-auto', $scope).length > 0 && (typeof subscribe_form_popup == 'undefined' || subscribe_form_popup == '')) {
                if ($('.subscribe-form-popup', $scope).first().length > 0) {
                    setTimeout(function() {
                        if (!$('body').hasClass('litho-lightbox-show')) {
                            $('.subscribe-form-popup a', $scope).trigger('click')
                        }
                    }, 2000)
                }
            }
            $('.subscribe-popup-prevent-text').on('click', function() {
                setLithoCookie(subscribe_form_cookie_name, 'visited', '7')
            });

            function getLithoCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1)
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length)
                    }
                }
                return ""
            }

            function setLithoCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = (exdays != 0 && exdays != '') ? d.toUTCString() : 0;
                document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/"
            }
        },
        videoButtonInit: function($scope) {
            if ($('.popup-youtube').length > 0 && $.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                $('.popup-youtube').magnificPopup({
                    preloader: !1,
                    type: 'iframe',
                    mainClass: 'mfp-fade litho-video-popup',
                    removalDelay: 160,
                    fixedContentPos: !0,
                    closeBtnInside: !1,
                })
            }
        },
        setParallax: function() {
            if (!isIE()) {
                if ($('[data-parallax-background-ratio]').length > 0) {
                    $('[data-parallax-background-ratio]').each(function() {
                        var ratio = $(this).attr('data-parallax-background-ratio') || 0.5;
                        $(this).parallax('50%', ratio)
                    })
                }
                if ($('[data-parallax-layout-ratio]').length > 0) {
                    $('[data-parallax-layout-ratio]').each(function() {
                        var ratio = $(this).attr('data-parallax-layout-ratio') || 1;
                        $(this).parallaxImg(ratio)
                    })
                }
            }
        },
        defaultentranceAnimation: function($scope) {
            elementorFrontend.waypoint($scope, function() {
                var $element = $scope.find('.litho-animated');
                $element.each(function(index) {
                    var _this = $(this),
                        dataAnimation = _this.attr('data-animation') || '',
                        dataAnimationDelay = _this.attr('data-animation-delay') || 0;
                    if ('' === dataAnimation || 'none' === dataAnimation) {
                        _this.removeClass('elementor-invisible');
                        return
                    }
                    setTimeout(function() {
                        _this.removeClass('elementor-invisible').addClass('animated ' + dataAnimation)
                    }, dataAnimationDelay)
                })
            })
        },
        defaultSwiperSlider: function($scope, $swiperContainer = '') {
            if (!$swiperContainer) {
                $swiperContainer = '.swiper-container'
            }
            var $target = $($swiperContainer, $scope).first(),
                settings = $target.data('settings') || {},
                breakpointsSettings = {},
                breakpoints = elementorFrontend.config.breakpoints;
            if ($target.length === 0) {
                return
            }
            if ($.inArray('swiper', LithoMain.disable_scripts) < 0) {
                breakpointsSettings[breakpoints.lg] = {
                    slidesPerView: settings.slides_to_show || 1,
                };
                breakpointsSettings[breakpoints.md] = {
                    slidesPerView: settings.slides_to_show_tablet || 1,
                };
                breakpointsSettings[breakpoints.xs] = {
                    slidesPerView: settings.slides_to_show_mobile || 1,
                };
                var swiperOptions = {
                    slidesPerView: settings.slides_to_show,
                    loop: 'yes' === settings.loop,
                    speed: settings.speed,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0
                    },
                    breakpoints: breakpointsSettings,
                    on: {
                        resize: function() {
                            defaultswiperObj.update()
                        }
                    }
                };
                if (settings.direction) {
                    swiperOptions.direction = settings.direction;
                    swiperOptions.on = {
                        init: function() {
                            if (getWindowWidth() <= tabletBreakPoint) {
                                this.changeDirection('horizontal')
                            } else {
                                this.changeDirection(settings.direction)
                            }
                            this.update()
                        },
                        resize: function() {
                            if (getWindowWidth() <= tabletBreakPoint) {
                                this.changeDirection('horizontal')
                            } else {
                                this.changeDirection(settings.direction)
                            }
                            this.update()
                        }
                    }
                }
                if (typeof(settings.image_spacing) !== 'undefined' && settings.image_spacing.size !== '' && settings.image_spacing.size !== null) {
                    swiperOptions.spaceBetween = settings.image_spacing.size
                }
                if (settings.effect) {
                    swiperOptions.effect = settings.effect
                }
                if ('yes' === settings.centered_slides) {
                    swiperOptions.centeredSlides = !0
                }
                if ('yes' === settings.number_pagination && settings.number_pagination != undefined) {
                    swiperOptions.on.slideChange = function() {
                        if ($('.swiper-pagination-current').length > 0) {
                            $('.swiper-pagination-current').html(pad(this.realIndex + 1, 2))
                        }
                        if ($('.swiper-pagination-total').length > 0) {
                            $('.swiper-pagination-total').html(pad(this.slides.length - 2, 2))
                        }
                    }
                }
                if ('fade' === settings.effect) {
                    swiperOptions.fadeEffect = {
                        crossFade: !0
                    }
                }
                if ('yes' === settings.autoplay) {
                    swiperOptions.autoplay = {
                        delay: settings.autoplay_speed
                    };
                    if (settings.pause_on_hover) {
                        $($target).on('mouseenter', function() {
                            defaultswiperObj.autoplay.stop()
                        });
                        $($target).on('mouseleave', function() {
                            defaultswiperObj.autoplay.start()
                        })
                    }
                }
                if ('yes' === settings.mousewheel) {
                    swiperOptions.mousewheel = !0
                }
                var showArrows = 'arrows' === settings.navigation || 'both' === settings.navigation,
                    showDots = 'dots' === settings.navigation || 'both' === settings.navigation || 'yes' === settings.navigation_dynamic_bullets;
                if (showArrows) {
                    swiperOptions.navigation = {
                        prevEl: '.elementor-swiper-button-prev',
                        nextEl: '.elementor-swiper-button-next'
                    }
                }
                if (showDots) {
                    swiperOptions.pagination = {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: !0,
                        dynamicBullets: settings.navigation_dynamic_bullets,
                    }
                }
                var defaultswiperObj = new Swiper($target, swiperOptions)
            }

            function pad(d) {
                return (d < 10) ? '0' + d.toString() : d.toString()
            }
        },
        defaultTiltbox: function($tiltbox) {
            if ($tiltbox.length > 0 && !isMobile && $.inArray('tilt', LithoMain.disable_scripts) < 0) {
                $tiltbox.each(function() {
                    var _self = $(this);
                    _self.tilt({
                        maxTilt: 20,
                        perspective: 1000,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                        scale: 1,
                        speed: 500,
                        transition: !0,
                        disableAxis: null,
                        reset: !0,
                        glare: !1,
                        maxGlare: 1
                    })
                })
            }
        },
        defaultIsotope: function($target, itemSelector, columnWidth) {
            if ($target.length === 0) {
                return
            }
            if (!itemSelector) {
                itemSelector = '.grid-item'
            }
            if (!columnWidth) {
                columnWidth = '.grid-sizer'
            }
            if ($.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0) {
                $target.imagesLoaded(function() {
                    $target.isotope({
                        layoutMode: 'masonry',
                        itemSelector: itemSelector,
                        percentPosition: !0,
                        stagger: 0,
                        masonry: {
                            columnWidth: columnWidth
                        }
                    });
                    $target.isotope();
                    setTimeout(function() {
                        $target.isotope()
                    }, 500)
                })
            }
            $(window).on('resize', function() {
                if (!$('body').hasClass('elementor-editor-active')) {
                    setTimeout(function() {
                        if ($target.length > 0 && $.inArray('imagesloaded', LithoMain.disable_scripts) < 0 && $.inArray('isotope', LithoMain.disable_scripts) < 0) {
                            $target.imagesLoaded(function() {
                                $target.isotope('layout')
                            })
                        }
                    }, 500)
                }
            })
        },
        defaultLightboxGallery: function() {
            if ($.inArray('magnific-popup', LithoMain.disable_scripts) < 0) {
                var lightboxgallerygroups = {};
                $('.lightbox-group-gallery-item').each(function() {
                    var id = $(this).attr('data-group');
                    if (!lightboxgallerygroups[id]) {
                        lightboxgallerygroups[id] = []
                    }
                    lightboxgallerygroups[id].push(this)
                });
                $.each(lightboxgallerygroups, function() {
                    $(this).magnificPopup({
                        type: 'image',
                        closeOnContentClick: !0,
                        closeBtnInside: !1,
                        fixedContentPos: !0,
                        gallery: {
                            enabled: !0
                        },
                        image: {
                            titleSrc: function(item) {
                                var title = '';
                                var lightbox_caption = '';
                                if (item.el.attr('title')) {
                                    title = item.el.attr('title')
                                }
                                if (item.el.attr('data-lightbox-caption')) {
                                    lightbox_caption = '<span class="litho-lightbox-caption">';
                                    lightbox_caption += item.el.attr('data-lightbox-caption');
                                    lightbox_caption += '</span>'
                                }
                                return title + lightbox_caption
                            }
                        }
                    })
                })
            }
        },
        defaultJustifiedGallery: function($portfolio_justified_gallery, $portfolio_lastRow) {
            if ($portfolio_justified_gallery.length > 0 && $.inArray('justified-gallery', LithoMain.disable_scripts) < 0) {
                if ($.inArray('imagesloaded', LithoMain.disable_scripts) < 0) {
                    $(document).imagesLoaded(function() {
                        initJustifiedGallery()
                    })
                } else {
                    initJustifiedGallery()
                }
            }

            function initJustifiedGallery() {
                $portfolio_justified_gallery.justifiedGallery({
                    rowHeight: 500,
                    maxRowHeight: !1,
                    captions: !0,
                    margins: 15,
                    waitThumbnailsLoad: !0,
                    lastRow: $portfolio_lastRow
                });
                $(document).on('mousemove', '.jg-entry', function(e) {
                    var imageWidth = $(this).width(),
                        captionWidth = $(this).find('.caption').width(),
                        parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left + 20,
                        relY = e.pageY - parentOffset.top;
                    if (relX + captionWidth + 30 > imageWidth) {
                        relX = relX - captionWidth - 65
                    }
                    $(this).css('overflow', 'visible');
                    $(this).find('.caption').css({
                        left: relX + 'px',
                        right: 'auto',
                        top: relY + 'px',
                        bottom: 'auto'
                    })
                });
                $(document).on('mouseleave', '.jg-entry', function() {
                    $(this).css('overflow', '');
                    $(this).find('.caption').css({
                        left: '',
                        right: '',
                        top: '',
                        bottom: ''
                    })
                })
            }
        },
        AnimationonFilterOnClick: function() {
            if ($('.elementor-invisible').length > 0) {
                $('.elementor-invisible').each(function() {
                    var _self = $(this);
                    if (!_self.hasClass('animated')) {
                        _self.removeClass('elementor-invisible').addClass('litho-elementor-visible')
                    }
                })
            }
            if ($.inArray('jquery-appear', LithoMain.disable_scripts) < 0) {
                $('.litho-elementor-visible').appear()
            }
            $('.litho-elementor-visible').on('appear', function(event, $all_appeared_elements) {
                var _this = $(this),
                    dataSettings = {};
                if (_this.attr('data-settings')) {
                    var dataSettings = $.parseJSON(_this.attr('data-settings'))
                }
                if (_this.hasClass('elementor-column') || _this.hasClass('elementor-section')) {
                    var dataAnimation = dataSettings.animation;
                    var dataAnimationDelay = dataSettings.animation_delay
                }
                if (_this.hasClass('elementor-widget')) {
                    var dataAnimation = dataSettings._animation;
                    var dataAnimationDelay = dataSettings._animation_delay
                }
                if (typeof(dataAnimation) == 'undefined') {
                    dataAnimation = 'none'
                }
                if (typeof(dataAnimationDelay) == 'undefined' || dataAnimationDelay == '') {
                    dataAnimationDelay = 100
                }
                if ('' === dataAnimation || 'none' === dataAnimation) {
                    _this.removeClass('elementor-invisible');
                    return
                }
                if (_this.hasClass('litho-elementor-visible')) {
                    setTimeout(function() {
                        _this.removeClass('litho-elementor-visible').addClass('animated ' + dataAnimation)
                    }, dataAnimationDelay)
                }
            })
        }
    };
    $(window).on('elementor/frontend/init', LithoAddonsInit.init)
})(jQuery)