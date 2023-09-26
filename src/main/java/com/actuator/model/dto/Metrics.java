package com.actuator.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class Metrics {
    private String applicationReadyTime;
    private String applicationStartedTime;
    private long diskTotal;
    private long diskFree;
    private String activeExecutor;
    private Number executorPoolCore;
    private Number executorCompleted;
    private long executorPoolMax;
    private long executorPoolSize;
    private long executorQueueRemaining;
    private String executorQueued;
    private String httpServerRequests;
    private Number httpServerRequestsCount;
    private Number  httpServerRequestsActive;
    private Number jvmBufferCount;
    private long jvmBufferMemoryUsed;
    private long jvmBufferTotalCapacity;
    private Number jvmClassesLoaded;
    private Number jvmClassesUnloaded;
    private double jvmCompilationTime;
    private long jvmGcLiveDataSize;
    private long jvmGcMaxDataSize;
    private long jvmGcMemoryAllocated;
    private long jvmGcMemoryPromoted;
    private String jvmGcOverhead;
    private String jvmGcPause;
    private String jvmInfo;
    private long jvmMemoryCommitted;
    private long jvmMemoryMax;
    private String jvmMemoryUsageAfterGc;
    private long jvmMemoryUsed;
    private Number jvmThreadsDaemon;
    private Number jvmThreadsLive;
    private Number jvmThreadsPeak;
    private Number jvmThreadsStarted;
    private Number jvmThreadsStates;
    private Number logbackEvents;
    private String processCpuUsage;
    private String processStartTime;
    private String processUptime;
    private Number systemCpuCount;
    private String systemCpuUsage;
    private String tomcatSessionsActiveCurrent;
    private String tomcatSessionsActiveMax;
    private String tomcatSessionsAliveMax;
    private String tomcatSessionsCreated;
    private String tomcatSessionsExpired;
    private String tomcatSessionsRejected;


}
