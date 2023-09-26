package com.actuator.service.serviceImpl;

import com.actuator.model.dto.Health;
import com.actuator.model.dto.Metrics;
import com.actuator.service.ActuatorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.health.HealthEndpoint;
import org.springframework.boot.actuate.metrics.MetricsEndpoint;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;

@Slf4j
@Component
public class ActuatorServiceImpl implements ActuatorService {
    @Autowired
    private MetricsEndpoint metricsEndpoint;
    @Autowired
    private HealthEndpoint healthEndpoint;

    @Override
    public Health getHealth() {
        Health health = new Health();
        health.setStatus(healthEndpoint.health().getStatus().toString());
        health.setDiskSpace(healthEndpoint.healthForPath("diskSpace").toString());
        return health;
    }

    @Override
    public Metrics getMetrics() {
        Metrics metrics = new Metrics();
        metrics.setApplicationReadyTime(metricsEndpoint
                .metric("application.ready.time",null)
                .getMeasurements().get(0).getValue().toString());

        metrics.setApplicationStartedTime(metricsEndpoint
                .metric("application.started.time",null)
                        .getMeasurements().get(0).getValue().toString());

        long total = metricsEndpoint
                .metric("disk.total", null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setDiskTotal(total / (1024 * 1024 * 1024));

        long free = metricsEndpoint
                .metric("disk.free",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setDiskFree(free / (1024 * 1024 * 1024));

        metrics.setActiveExecutor(metricsEndpoint
                .metric("executor.active",null)
                .getMeasurements().get(0).getValue().toString());

        metrics.setExecutorCompleted(metricsEndpoint
                .metric("executor.completed",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setExecutorPoolCore(metricsEndpoint
                .metric("executor.pool.core",null)
                .getMeasurements().get(0).getValue().intValue());

        long pool = metricsEndpoint
                .metric("executor.pool.max",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setExecutorPoolMax(pool / (1024 * 1024 * 1024));

        long poolSize = metricsEndpoint
                .metric("executor.pool.size",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setExecutorPoolSize(poolSize / (1024 * 1024 * 1024));

        long queue = metricsEndpoint
                .metric("executor.queue.remaining",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setExecutorQueueRemaining(queue / (1024 * 1024 * 1024));

        metrics.setExecutorQueued(metricsEndpoint
                .metric("executor.queued",null)
                .getMeasurements().get(0).getValue().toString());

        metrics.setHttpServerRequests(Arrays.toString(metricsEndpoint
                .metric("http.server.requests",null)
                        .getAvailableTags().get(3).getValues().toArray()));

        metrics.setHttpServerRequestsCount(metricsEndpoint
                .metric("http.server.requests",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setHttpServerRequestsActive(metricsEndpoint
                .metric("http.server.requests.active",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmBufferCount(metricsEndpoint.metric("jvm.buffer.count",null)
                .getMeasurements().get(0).getValue().intValue());

        long bufferUsed = metricsEndpoint
                .metric("jvm.buffer.memory.used",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmBufferMemoryUsed(bufferUsed / (1024 * 1024));

        long bufferCapacity = metricsEndpoint
                .metric("jvm.buffer.total.capacity",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmBufferTotalCapacity(bufferCapacity / (1024 * 1024));

        metrics.setJvmClassesLoaded(metricsEndpoint
                .metric("jvm.classes.loaded",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmClassesUnloaded(metricsEndpoint
                .metric("jvm.classes.unloaded",null)
                .getMeasurements().get(0).getValue().intValue());

        double time = metricsEndpoint
                .metric("jvm.compilation.time",null)
                .getMeasurements().get(0).getValue().doubleValue();

        metrics.setJvmCompilationTime(time / 1000);

        long dataSize = metricsEndpoint
                .metric("jvm.gc.live.data.size",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmGcLiveDataSize(dataSize / (1024 * 1024 * 1024));

        long maxDataSize = metricsEndpoint
                .metric("jvm.gc.max.data.size",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmGcMaxDataSize(maxDataSize / (1024 * 1024 * 1024));

        long jvmGcMemory = metricsEndpoint
                .metric("jvm.gc.memory.allocated",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmGcMemoryAllocated(jvmGcMemory / (1024 * 1024 * 1024));
        long jvmGcPromoted = metricsEndpoint
                .metric("jvm.gc.memory.promoted",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmGcMemoryPromoted(jvmGcPromoted / (1024 * 1024 * 1024));

        metrics.setJvmGcOverhead(metricsEndpoint
                .metric("jvm.gc.overhead",null)
                .getMeasurements().get(0).getValue().toString());

        metrics.setJvmGcPause(metricsEndpoint
                .metric("jvm.gc.pause",null)
                .getMeasurements().get(1).getValue().toString());

        metrics.setJvmInfo(metricsEndpoint
                .metric("jvm.info",null)
                .getMeasurements().get(0).getValue().toString());

        long jvmCommit = metricsEndpoint
                .metric("jvm.memory.committed",null)
                .getMeasurements().get(0).getValue().longValue();

        metrics.setJvmMemoryCommitted(jvmCommit / (1024 * 1024 * 1024));

        long jvmMemoMax = metricsEndpoint
                .metric("jvm.memory.max",null)
                .getMeasurements().get(0).getValue().longValue();
        metrics.setJvmMemoryMax(jvmMemoMax / (1024 * 1024 * 1024));

        metrics.setJvmMemoryUsageAfterGc(metricsEndpoint
                .metric("jvm.memory.usage.after.gc",null)
                .getMeasurements().get(0).getValue().toString());

        long jvmUsed = metricsEndpoint
                .metric("jvm.memory.used",null)
                .getMeasurements().get(0).getValue().longValue();
        metrics.setJvmMemoryUsed(jvmUsed / (1024 * 1024));

        metrics.setJvmThreadsDaemon(metricsEndpoint
                .metric("jvm.threads.daemon",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmThreadsLive(metricsEndpoint
                .metric("jvm.threads.live",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmThreadsPeak(metricsEndpoint
                .metric("jvm.threads.peak",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmThreadsStarted(metricsEndpoint
                .metric("jvm.threads.started",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setJvmThreadsStates(metricsEndpoint
                .metric( "jvm.threads.states",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setLogbackEvents(metricsEndpoint
                .metric("logback.events",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setProcessCpuUsage(metricsEndpoint
                .metric("process.cpu.usage",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setProcessStartTime(metricsEndpoint
                .metric("process.start.time",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setProcessUptime(metricsEndpoint
                .metric("process.uptime",null)
                .getMeasurements().get(0).getValue().toString());

        metrics.setSystemCpuCount(metricsEndpoint
                .metric( "system.cpu.count",null)
                .getMeasurements().get(0).getValue().intValue());

        metrics.setSystemCpuUsage(metricsEndpoint
                .metric("system.cpu.usage",null).getMeasurements().get(0).getValue().toString());

        metrics.setTomcatSessionsActiveCurrent(metricsEndpoint
                .metric("tomcat.sessions.active.current",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setTomcatSessionsActiveMax(metricsEndpoint
                .metric("tomcat.sessions.active.max",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setTomcatSessionsActiveMax(metricsEndpoint
                .metric("tomcat.sessions.alive.max",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setTomcatSessionsCreated(metricsEndpoint
                .metric("tomcat.sessions.created",null)
                .getMeasurements().get(0).getValue().toString());
        metrics.setTomcatSessionsExpired(metricsEndpoint
                .metric( "tomcat.sessions.expired",null).getMeasurements().get(0).getValue().toString());
        metrics.setTomcatSessionsRejected(metricsEndpoint
                .metric("tomcat.sessions.rejected",null)
                .getMeasurements().get(0).getValue().toString());

        return metrics;
    }
}
