//
//  NetworkStatus.m
//  NativeNetworkModule
//
//  Created by ayoub aharmim on 16/5/2023.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(NetworkStatus, RCTEventEmitter)

RCT_EXTERN_METHOD(startMonitoring)
RCT_EXTERN_METHOD(stopMonitoring)
@end
