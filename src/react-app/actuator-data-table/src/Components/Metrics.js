import React, { useState, useEffect } from "react";
import axios from "axios";
import { DescriptionList } from "@shopify/polaris";

function Metrics() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/metrics");
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="metrics">
      <DescriptionList
        items={[
          {
            term: "application.ready.time",
            description: data.applicationReadyTime + " ms",
          },
          {
            term: "application.started.time",
            description: data.applicationStartedTime + " ms",
          },
          {
            term: "disk.total",
            description: data.diskTotal+" GB",
          },
          {
            term: "disk.free",
            description: data.diskFree+ " GB",
          },
          {
            term: "executor.active",
            description: data.activeExecutor,
          },
          {
            term: "executor.pool.core",
            description: data.executorPoolCore,
          },
          {
            term: "executor.active",
            description: data.activeExecutor,
          },
          {
            term: "executor.pool.core",
            description: data.executorPoolCore,
          },
          {
            term: "executor.completed",
            description: data.executorCompleted,
          },
          {
            term: "executor.pool.max",
            description: data.executorPoolMax,
          },
          {
            term: "executor.pool.size",
            description: data.executorPoolSize,
          },
          {
            term: "executor.queue.remaining",
            description: data.executorQueueRemaining,
          },

          {
            term: "executor.queued",
            description: data.executorQueued,
          },
          {
            term: "http.server.requests",
            description: data.httpServerRequests,
          },
          {
            term: "http.server.requests",
            description: data.httpServerRequestsValue,
          },
          {
            term: "http.server.requests.active",
            description: data.httpServerRequestsActive,
          },
          {
            term: "jvm.buffer.count",
            description: data.jvmBufferCount,
          },
          {
            term: "jvm.buffer.memory.used",
            description: data.jvmBufferMemoryUsed + " MB",
          },
          {
            term: "jvm.buffer.total.capacity",
            description: data.jvmBufferTotalCapacity,
          },
          {
            term: "jvm.classes.loaded",
            description: data.jvmClassesLoaded,
          },
          {
            term: "jvm.classes.unloaded",
            description: data.jvmClassesUnloaded,
          },
          {
            term: "jvm.compilation.time",
            description: data.jvmCompilationTime +" sec",
          },
          {
            term: "jvm.gc.live.data.size",
            description: data.jvmGcLiveDataSize,
          },
          {
            term: "jvm.gc.max.data.size",
            description: data.jvmGcMaxDataSize,
          },
          {
            term: "jvm.gc.memory.allocated",
            description: data.jvmGcMemoryAllocated,
          },

          {
            term: "jvm.gc.memory.promoted",
            description: data.jvmGcMemoryPromoted,
          },
          {
            term: "jvm.gc.overhead",
            description: data.jvmGcOverhead * 100 + ' %',
          },
          {
            term: "jvm.gc.pause",
            description: data.jvmGcPause + " sec",
          },
          {
            term: "jvm.info",
            description: data.jvmInfo,
          },
          {
            term: "jvm.memory.committed",
            description: data.jvmMemoryCommitted + " GB",
          },
          {
            term: "jvm.memory.max",
            description: data.jvmMemoryMax,
          },
          {
            term: "jvm.memory.usage.after.gc",
            description: data.jvmMemoryUsageAfterGc + " %",
          },
          {
            term: "jvm.memory.used",
            description: data.jvmMemoryUsed + " MB",
          },
          {
            term: "jvm.threads.daemon",
            description: data.jvmThreadsDaemon,
          },
          {
            term: "jvm.threads.live",
            description: data.jvmThreadsLive,
          },
          {
            term: "jvm.threads.daemon",
            description: data.jvmThreadsDaemon,
          },
          {
            term: "jvm.threads.peak",
            description: data.jvmThreadsPeak,
          },
          {
            term: "jvm.threads.started",
            description: data.jvmThreadsStarted,
          },
          {
            term: "jvm.threads.states",
            description: data.jvmThreadsStates,
          },
          {
            term: "logback.events",
            description: data.logbackEvents,
          },
          {
            term: "process.cpu.usage",
            description: data.processCpuUsage * 100 +" %",
          },
          {
            term: "process.start.time",
            description: data.processStartTime +' sec',
          },
          {
            term: "process.uptime",
            description: data.processUptime + ' sec',
          },
          {
            term: "system.cpu.count",
            description: data.systemCpuCount,
          },
          {
            term: "system.cpu.usage",
            description: data.systemCpuUsage * 100 + " %",
          },
        ]}
      />
    </div>
  );
}
export default Metrics;
