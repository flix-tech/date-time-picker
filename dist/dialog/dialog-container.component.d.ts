import { ChangeDetectorRef, ComponentRef, EmbeddedViewRef, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { OwlDialogConfig } from './dialog-config.class';
export declare class OwlDialogContainerComponent extends BasePortalOutlet implements OnInit {
    private changeDetector;
    private elementRef;
    private focusTrapFactory;
    private document;
    portalOutlet: CdkPortalOutlet;
    private focusTrap;
    ariaLabelledBy: string | null;
    animationStateChanged: EventEmitter<AnimationEvent>;
    isAnimating: boolean;
    private _config;
    readonly config: OwlDialogConfig;
    private state;
    private params;
    private elementFocusedBeforeDialogWasOpened;
    readonly owlDialogContainerClass: boolean;
    readonly owlDialogContainerTabIndex: number;
    readonly owlDialogContainerId: string;
    readonly owlDialogContainerRole: string;
    readonly owlDialogContainerAriaLabelledby: string;
    readonly owlDialogContainerAriaDescribedby: string;
    readonly owlDialogContainerAnimation: any;
    constructor(changeDetector: ChangeDetectorRef, elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, document: any);
    ngOnInit(): void;
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    setConfig(config: OwlDialogConfig): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationDone(event: AnimationEvent): void;
    startExitAnimation(): void;
    private calculateZoomOrigin(event);
    private savePreviouslyFocusedElement();
    private trapFocus();
    private restoreFocus();
}
