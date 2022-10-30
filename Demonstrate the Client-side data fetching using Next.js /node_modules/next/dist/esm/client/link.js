"use client";
import _object_without_properties_loose from "@swc/helpers/src/_object_without_properties_loose.mjs";
import React from 'react';
import { isLocalURL, resolveHref } from '../shared/lib/router/router';
import { addLocale } from './add-locale';
import { RouterContext } from '../shared/lib/router-context';
import { AppRouterContext } from '../shared/lib/app-router-context';
import { useIntersection } from './use-intersection';
import { getDomainLocale } from './get-domain-locale';
import { addBasePath } from './add-base-path';
'use client';
const prefetched = {};
function prefetch(router, href, as, options) {
    if (typeof window === 'undefined' || !router) return;
    if (!isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (process.env.NODE_ENV !== 'production') {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
    const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && (isModifiedEvent(e) || !isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ('beforePopState' in router) {
            router[replace ? 'replace' : 'push'](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            // If `beforePopState` doesn't exist on the router it's the AppRouter.
            const method = replace ? 'replace' : 'push';
            // Apply `as` if it's provided.
            router[method](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        React.startTransition(navigate);
    } else {
        navigate();
    }
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ React.forwardRef(function LinkComponent(props, forwardedRef) {
    if (process.env.NODE_ENV !== 'production') {
        function createPropError(args) {
            return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : ''));
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            locale: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'locale') {
                if (props[key] && valType !== 'string') {
                    throw createPropError({
                        key,
                        expected: '`string`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const hasWarned = React.useRef(false);
        if (props.prefetch && !hasWarned.current) {
            hasWarned.current = true;
            console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
        }
    }
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter , onTouchStart , legacyBehavior =Boolean(process.env.__NEXT_NEW_LINK_BEHAVIOR) !== true  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ React.createElement("a", null, children);
    }
    const p = prefetchProp !== false;
    let router = React.useContext(RouterContext);
    // TODO-APP: type error. Remove `as any`
    const appRouter = React.useContext(AppRouterContext);
    if (appRouter) {
        router = appRouter;
    }
    const { href , as  } = React.useMemo(()=>{
        const [resolvedHref, resolvedAs] = resolveHref(router, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? resolveHref(router, asProp) : resolvedAs || resolvedHref
        };
    }, [
        router,
        hrefProp,
        asProp
    ]);
    const previousHref = React.useRef(href);
    const previousAs = React.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (process.env.NODE_ENV === 'development') {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnter) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = React.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
                }
                throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : ''));
            }
        } else {
            child = React.Children.only(children);
        }
    } else {
        if (process.env.NODE_ENV === 'development') {
            var ref;
            if (((ref = children) == null ? void 0 : ref.type) === 'a') {
                throw new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor');
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = useIntersection({
        rootMargin: '200px'
    });
    const setRef = React.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    React.useEffect(()=>{
        const shouldPrefetch = isVisible && p && isLocalURL(href);
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick: (e)=>{
            if (process.env.NODE_ENV !== 'production') {
                if (!e) {
                    throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale, Boolean(appRouter), p);
            }
        },
        onMouseEnter: (e)=>{
            if (!legacyBehavior && typeof onMouseEnter === 'function') {
                onMouseEnter(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            // Check for not prefetch disabled in page using appRouter
            if (!(!p && appRouter)) {
                if (isLocalURL(href)) {
                    prefetch(router, href, as, {
                        priority: true
                    });
                }
            }
        },
        onTouchStart: (e)=>{
            if (!legacyBehavior && typeof onTouchStart === 'function') {
                onTouchStart(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            // Check for not prefetch disabled in page using appRouter
            if (!(!p && appRouter)) {
                if (isLocalURL(href)) {
                    prefetch(router, href, as, {
                        priority: true
                    });
                }
            }
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = router && router.isLocaleDomain && getDomainLocale(as, curLocale, router.locales, router.domainLocales);
        childProps.href = localeDomain || addBasePath(addLocale(as, curLocale, router && router.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ React.cloneElement(child, childProps) : /*#__PURE__*/ React.createElement("a", Object.assign({}, restProps, childProps), children);
});
export default Link;

//# sourceMappingURL=link.js.map